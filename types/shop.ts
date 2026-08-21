interface ImageInfo {
  _id: string;
  imageInfo: {
    publicId: string;
    url: string;
  };
}

export interface ProductSizeType {
  _id: string;
  size: string;
  stock: string;
  reservedStock: string;
}

export interface ColorType {
  hex: string;
}

export interface ProductVariantType {
  _id: string;
  sku: string;
  stock: number;
  attributes: {
    color: ColorType;
    size: string;
  };
  availableStock: number;
  reservedStock: number;
}

export interface ProductType {
  _id: string;
  category: string;
  productCode: string;
  description: string;
  images: ImageInfo[];
  isArchived: boolean;
  isOnSale: boolean;
  isPublished: boolean;
  price: number;
  productName: string;
  slug: string;
  tag: string;
  variants: ProductVariantType[];
}

export interface ReturnedGetProducts {
  products: ProductType[];
  currentPage: number;
  totalPages: number;
  totalItems: number;
}

export interface GetCategoriesType {
  label: string;
  value: string;
}
