import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import BillingAddress from "./BillingAddress";
import OrderDetails from "./OrderDetails";

import {
  CreatePaymongoPaymentRequestSchema,
  type CreatePaymongoPaymentRequestType,
} from "@/zodSchemas/customOrderPayment";

import { PaymentRequest } from "@/types/paymentRequest";
import { CustomOrder } from "@/types/customOrders";
import { User } from "next-auth";
import { requestPayment } from "@/actions/paymentRequest";

interface FormProps {
  user: {
    clientId?: string | undefined;
    firstName?: string | null | undefined;
    lastName?: string | null | undefined;
    provider?: string | undefined;
  } & User;
  customorder: CustomOrder;
  paymentRequest: PaymentRequest;
}

const Form = ({ user, customorder, paymentRequest }: FormProps) => {
  const methods = useForm<CreatePaymongoPaymentRequestType>({
    resolver: zodResolver(CreatePaymongoPaymentRequestSchema),
    defaultValues: {
      paymentRequestId: paymentRequest._id,
      emailAddress: customorder.email,
      firstName: user.firstName || "",
      lastName: user.lastName || "",
      phoneNumber: customorder.phone,
      referenceNumber: customorder.referenceNumber,
      amount: paymentRequest.amount,
      typeOfPayment: paymentRequest.type,
      city: "",
      address: "",
      postalCode: "",
      province: "",
    },
  });

  const onSubmit = async (data: CreatePaymongoPaymentRequestType) => {
    const result = await requestPayment(data);

    if (result.success) {
      window.location.href = result.result;
      return;
    }

    if (!result.success) {
      methods.setError("root.serverError", { message: result.error });
      return;
    }
  };

  return (
    <Card className='border border-porcelainBeige rounded-2xl shadow-sm'>
      <CardContent className='space-y-10'>
        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit(onSubmit)}
            className='flex flex-col gap-5 text-left'
          >
            {/* Order Details */}
            <OrderDetails
              paymentRequest={paymentRequest}
              customorder={customorder}
            />

            <div className='border-t border-porcelainBeige' />

            {/* Billing Address */}
            <BillingAddress />

            {/* Divider */}
            <div className='border-t border-porcelainBeige' />

            {/* Payment CTA */}
            <div className='space-y-5'>
              <Button
                size='lg'
                className='w-full bg-warmTaupe hover:bg-deepMocha text-white rounded-xl h-12 text-sm tracking-wide'
              >
                Pay Securely
              </Button>

              <p className='text-xs text-center text-muted-foreground'>
                Secure payment powered by PayMongo.
              </p>
            </div>
          </form>
        </FormProvider>
      </CardContent>
    </Card>
  );
};

export default Form;
