import {
  GetCategoriesType,
  ReturnedGetProducts,
  ProductType,
} from "@/types/shop";
import { ParamValue } from "next/dist/server/request/params";

const service_route = process.env.NEXT_PUBLIC_PRODUCT_ROUTE;

const API_URL =
  process.env.NODE_ENV === "production"
    ? `https://geoandmebridalbackend.onrender.com/${service_route}`
    : `http://localhost:3005/${service_route}`;

interface filter {
  category?: string[] | string;
  size?: string[] | string;
  page?: string[] | string;
  cursor?: string | null;
}

export async function GetProducts(
  filter: filter,
  formattedCategory: string,
): Promise<ReturnedGetProducts> {
  const queryParams = new URLSearchParams();

  // append filter keys (arrays supported)
  Object.entries(filter).forEach(([key, value]) => {
    if (!value) return;
    if (Array.isArray(value)) {
      value.forEach((v) => queryParams.append(key, v));
    } else {
      queryParams.append(key, value as string);
    }
  });

  // append formattedCategory
  queryParams.append("formattedCategory", formattedCategory);

  const data = await fetch(
    `${API_URL}/getclientproducts?${queryParams.toString()}&limit=${process.env.PAGE_LIMIT}`,
    {
      method: "GET",
      next: {
        // revalidate: 86400,
        tags: ["products"],
      },
    },
  );

  if (!data.ok) {
    throw new Error(
      `Failed to fetch products ${data.status} ${data.statusText}`,
    );
  }

  return await data.json();
}

export async function GetCategories(
  category: ParamValue,
): Promise<GetCategoriesType[]> {
  const data = await fetch(
    `${API_URL}/getclientproductscategories?category=${category}`,
    {
      method: "GET",
      next: {
        // revalidate: 86400,
        tags: ["categories"],
      },
    },
  );

  if (!data.ok) {
    throw new Error(
      `Failed to fetch products ${data.status} ${data.statusText}`,
    );
  }

  return await data.json();
}

export async function GetProduct(slug: string): Promise<ProductType> {
  const data = await fetch(`${API_URL}/getproduct/${slug}`, {
    method: "GET",
    next: {
      // revalidate: 86400,
      tags: ["product", slug],
    },
  });

  if (!data.ok) {
    throw new Error(
      `Failed to fetch products ${data.status} ${data.statusText}`,
    );
  }

  return await data.json();
}
