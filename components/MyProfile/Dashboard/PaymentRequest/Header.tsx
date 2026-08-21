import CustomSeparator from "@/components/SharedComponents/CustomSeparator";
import { PaymentRequest } from "@/types/paymentRequest";

const paymentHeaderContent = {
  downpayment: {
    title: "Your Couture Journey Begins",
    description:
      "A downpayment confirms your order and allows our atelier to begin crafting your bespoke pieces.",
  },

  balance: {
    title: "Your Pieces Are Ready",
    description:
      "Your couture pieces are now complete. Please settle the remaining balance to proceed with pickup or delivery.",
  },
};

const Header = ({ paymentRequest }: { paymentRequest: PaymentRequest }) => {
  const content =
    paymentHeaderContent[paymentRequest.type] ||
    paymentHeaderContent.downpayment;

  return (
    <div className='space-y-5'>
      <h1 className='font-serif text-2xl font-light'>{content.title}</h1>

      <CustomSeparator />

      <p className='text-muted-foreground max-w-lg'>{content.description}</p>
    </div>
  );
};

export default Header;
