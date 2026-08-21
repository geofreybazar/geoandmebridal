import { createContext, useContext } from "react";
import { GetCategoriesType } from "@/types/shop";

const SubCategoriesContext = createContext<GetCategoriesType[] | null>(null);

export const useContextSubCategories = () => {
  const subCategories = useContext(SubCategoriesContext);

  if (!subCategories) {
    throw new Error(
      "useSubCategories must be used within SubCategoriesProvider",
    );
  }

  return subCategories;
};

export default SubCategoriesContext;
