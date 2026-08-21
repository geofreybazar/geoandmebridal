import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { CustomOrder } from "@/types/customOrders";

const CTA = ({ order }: { order: CustomOrder }) => {
  const router = useRouter();

  const handleViewCustomOrder = (id: string) => {
    router.push(`/myprofile/${id}`);
  };

  return (
    <div className='pt-4'>
      <Button
        className='w-full bg-warmTaupe hover:bg-deepMocha text-white rounded-xl h-11 text-sm tracking-wide'
        onClick={() => handleViewCustomOrder(order._id)}
      >
        View Order Details
      </Button>
    </div>
  );
};

export default CTA;
