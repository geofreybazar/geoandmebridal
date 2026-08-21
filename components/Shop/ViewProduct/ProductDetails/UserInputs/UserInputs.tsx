"use client";

import { useState } from "react";
import ColorSelect from "./ColorSelect";
import CTA from "./CTA";
import { ProductType, ProductVariantType } from "@/types/shop";
import SelectQuantity from "./SelectQuantity";
import SelectSize from "./SelectSize";

const UserInputs = ({ product }: { product: ProductType }) => {
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState<ProductVariantType | null>(
    null,
  );

  const [selectedQuantity, setSelectedQuantity] = useState<number>(1);

  return (
    <>
      <ColorSelect
        product={product}
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
        setSelectedSize={setSelectedSize}
      />

      <SelectSize
        product={product}
        selectedColor={selectedColor}
        selectedSize={selectedSize}
        setSelectedSize={setSelectedSize}
      />

      <SelectQuantity
        selectedSize={selectedSize}
        selectedQuantity={selectedQuantity}
        setSelectedQuantity={setSelectedQuantity}
      />

      <CTA
        product={product}
        selectedSize={selectedSize}
        selectedQuantity={selectedQuantity}
      />
    </>
  );
};

export default UserInputs;
