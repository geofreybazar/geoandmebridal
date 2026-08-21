import { useFormContext, useWatch } from "react-hook-form";

import {
  DeliveryDetailsInput,
  DeliveryDetailsOutput,
} from "@/zodSchemas/cartCheckoutForm";
import ShippingForm from "./ShippingForm";
import PickupForm from "./PickupForm";
import Contact from "./Contact";
import { Card, CardContent } from "@/components/ui/card";

const DeliveryDetails = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext<DeliveryDetailsInput, undefined, DeliveryDetailsOutput>();

  const pickupOrDelivery = useWatch({
    control,
    name: "pickupOrDelivery",
  });

  return (
    <Card>
      <CardContent>
        <div className='flex flex-col gap-2'>
          <Contact />

          {pickupOrDelivery === "fordelivery" ? (
            <ShippingForm />
          ) : pickupOrDelivery === "forpickup" ? (
            <PickupForm />
          ) : null}

          {errors.root && <p className='text-red-600'>{errors.root.message}</p>}
        </div>
      </CardContent>
    </Card>
  );
};

export default DeliveryDetails;
