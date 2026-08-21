import { useMemo } from "react";
import { useWatch } from "react-hook-form";
import { useFormContext } from "react-hook-form";
import {
  DeliveryDetailsInput,
  DeliveryDetailsOutput,
} from "@/zodSchemas/cartCheckoutForm";

import { formattedValue } from "@/utils/currency/currency";
import { cityShippingFees } from "@/utils/constants/metroManilaProvinces";
import { Items } from "@/types/cart";

interface TotalFeeProps {
  cartTotalPrice?: number;
  cartItems: Items[];
}

const TotalFee = ({ cartTotalPrice, cartItems }: TotalFeeProps) => {
  const { control } = useFormContext<
    DeliveryDetailsInput,
    undefined,
    DeliveryDetailsOutput
  >();

  const selectedCity = useWatch({
    control,
    name: "city",
  });

  const subtotal = useMemo(() => {
    return cartItems.reduce((total, item) => {
      const price = Number(item.price);
      return total + price * item.quantity;
    }, 0);
  }, [cartItems]);

  const shippingFee = selectedCity ? cityShippingFees[selectedCity] : 0;

  const actualSubtotal = cartTotalPrice ?? subtotal;

  const totalPrice = useMemo(
    () => formattedValue(actualSubtotal + shippingFee),
    [subtotal, shippingFee],
  );

  return (
    <div className='space-y-4'>
      <div className='flex justify-between text-sm'>
        <span className='text-muted-foreground'>Subtotal</span>

        <span>{formattedValue(actualSubtotal)}</span>
      </div>

      <div className='flex justify-between text-sm'>
        <span className='text-muted-foreground'>Shipping</span>

        <span>{formattedValue(shippingFee)}</span>
      </div>

      <div className='border-t pt-4' />

      <div className='flex justify-between items-center'>
        <span className='font-serif text-xl'>Total</span>

        <span className='font-serif text-2xl'>{totalPrice}</span>
      </div>
    </div>
  );
};

export default TotalFee;
