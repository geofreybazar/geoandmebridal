"use client";

import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useQueryClient } from "@tanstack/react-query";
import useGetClientCart from "@/hooks/cart/useGetClientCart";

import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  DeliveryDetailsInput,
  DeliveryDetailsOutput,
  deliveryDetailsSchema,
} from "@/zodSchemas/cartCheckoutForm";

import DeliveryDetails from "./DeliveryDetails/DeliveryDetails";
import PaymentDetails from "./PaymentDetails/PaymentDetails";
import EmptyCart from "./EmptyCart";
import LoadingCheckoutPage from "./LoadingCheckoutPage";
import { CheckOut } from "@/actions/checkout";
import { toast } from "sonner";

const CheckOutPage = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const { data: session, status } = useSession();

  const { cartItems: fetchedCartItems, isLoading } = useGetClientCart(
    session?.user.id || "",
  );

  const cartItems = fetchedCartItems?.items ?? [];

  const methods = useForm<
    DeliveryDetailsInput,
    undefined,
    DeliveryDetailsOutput
  >({
    resolver: zodResolver(deliveryDetailsSchema),
    defaultValues: {
      firstName: session?.user.firstName || "",
      lastName: session?.user.lastName || "",
      emailAddress: session?.user.email || "",
      phoneNumber: "",
      city: undefined,
      pickupOrDelivery: "forpickup",
      timeOfPickup: "",
      dateOfPickup: undefined,
      address: "",
      postalCode: "",
    },
  });

  const { handleSubmit } = methods;

  const onSubmit = async (data: DeliveryDetailsOutput) => {
    const items = cartItems.map((item) => ({
      productid: item.productId,
      sku: item.sku,
      quantity: item.quantity,
      price: item.price,
      name: item.name,
      imgUrl: item.imgUrl,
      variantId: item.variantId,
      description: item.description,
    }));

    const checkOutSessionPayload = {
      ...data,
      cartId: fetchedCartItems?._id,
      clientId: session?.user.id,
      items: items,
    };

    try {
      const response = await CheckOut(checkOutSessionPayload);

      const result = response.result;

      if (!result) {
        throw new Error("Invalid checkout response");
      }

      // Checkout successful
      if (result.success) {
        if (result.checkoutUrl) window.location.href = result.checkoutUrl;
        return;
      }

      // Expected checkout failures
      switch (result.reason) {
        case "CART_EMPTY": {
          await queryClient.invalidateQueries({
            queryKey: ["cartItems", session?.user.id],
          });

          // Show feedback first
          toast.error(result.message);

          // Redirect back to shopping
          router.push("/shop");

          return;
        }
        case "INSUFFICIENT_STOCK": {
          toast.error(result.message);

          await queryClient.invalidateQueries({
            queryKey: ["cartItems", session?.user.id],
          });

          methods.setError("root", {
            message: result.message,
          });

          return;
        }

        default:
          methods.setError("root", {
            message: "Unable to complete checkout.",
          });

          return;
      }
    } catch (error: unknown) {
      methods.setError("root", {
        message: "Payment request failed.",
      });
    }
  };

  if (status === "loading") return <LoadingCheckoutPage />;
  if (!isLoading && cartItems.length === 0) return <EmptyCart />;

  return (
    <div>
      {/* Header */}
      <div className='mb-5 md:mb-10'>
        <h1 className='font-serif text-4xl font-light tracking-tight'>
          Checkout
        </h1>

        <p className='mt-2 text-muted-foreground'>
          Complete your order details and proceed to secure payment.
        </p>
      </div>

      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='grid gap-10 lg:grid-cols-[2fr_3fr]'
        >
          {/* Left Side */}
          <div>
            <DeliveryDetails />
          </div>

          {/* Right Side */}
          <div className='lg:sticky lg:top-8 self-start'>
            <PaymentDetails />
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default CheckOutPage;
