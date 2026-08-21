"use client";

import { useState, useMemo } from "react";
import { useSession } from "next-auth/react";
import { useSideCartStore } from "@/store/shop/sideCartStore";
import { ProductVariantType, ProductType } from "@/types/shop";
import { Items } from "@/types/cart";
import { paragraph } from "@/utils/fonts/fonts";
import { addItem } from "@/actions/cart";
import { useQueryClient } from "@tanstack/react-query";

import NotLoginAlert from "./NotLoginAlert";

interface AddToCartButtonProps {
  product: ProductType;
  selectedSize: ProductVariantType | null;
  selectedQuantity: number;
}

const AddToCartButton = ({
  product,
  selectedSize,
  selectedQuantity,
}: AddToCartButtonProps) => {
  const [showNotLoginUserAlert, setShowNotLoginUserAlert] = useState(false);
  const queryClient = useQueryClient();
  const { data: session } = useSession();
  const setOpen = useSideCartStore((state) => state.setOpen);

  // Compute real available stock
  const availableStock = useMemo(() => {
    return selectedSize
      ? Math.max(
          Number(selectedSize.stock) - Number(selectedSize.reservedStock || 0),
          0,
        )
      : 0;
  }, [selectedSize]);

  const isDisabled =
    !selectedSize ||
    availableStock === 0 ||
    selectedQuantity < 1 ||
    selectedQuantity > availableStock;

  const handleAddToCart = async () => {
    if (isDisabled) return;
    const productItem: Items = {
      productId: product._id,
      variantId: selectedSize._id,
      name: product.productName,
      sku: selectedSize.sku,
      quantity: selectedQuantity,
      description: product.description,
      maxQuantity: availableStock,
      price: product.price,
      imgUrl: product.images[0].imageInfo.url,
    };
    if (session) {
      const data = {
        clientId: session.user.id,
        ...productItem,
      };
      await addItem(data);
      await queryClient.invalidateQueries({
        queryKey: ["cartItems", session.user.id],
      });
      setOpen(true);
    } else {
      setShowNotLoginUserAlert(true);
    }
  };

  return (
    <div>
      <button
        type='button'
        onClick={handleAddToCart}
        disabled={isDisabled}
        className={`
          ${paragraph.className}
          w-full
          rounded-md
          border
          px-8 
          py-4
          text-base
          transition-all duration-300 ease-out
          ${
            isDisabled
              ? "border-black/20 bg-gray-200 text-black/40 cursor-not-allowed"
              : "border-mocha bg-mocha text-offwhite hover:bg-mocha/90 hover:-translate-y-0.5"
          }
        `}
      >
        {isDisabled
          ? !selectedSize
            ? "Select a size"
            : availableStock === 0
              ? "Out of stock"
              : "Invalid quantity"
          : "Add to cart"}
      </button>

      {/* Helper text */}
      {selectedSize && availableStock > 0 && (
        <p className='hidden md:block mt-2 text-xs text-black/60 text-center'>
          {availableStock} item{availableStock > 1 ? "s" : ""} available
        </p>
      )}

      <NotLoginAlert
        showNotLoginUserAlert={showNotLoginUserAlert}
        setShowNotLoginUserAlert={setShowNotLoginUserAlert}
      />
    </div>
  );
};

export default AddToCartButton;
