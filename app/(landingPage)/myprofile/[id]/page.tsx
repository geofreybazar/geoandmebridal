import { notFound } from "next/navigation";
import { GetCustomOrder } from "@/services/customOrders";

import Header from "@/components/MyProfile/ViewCustomOrderDetails/Header";
import Items from "@/components/MyProfile/ViewCustomOrderDetails/Items";
import NextStep from "@/components/MyProfile/ViewCustomOrderDetails/NextStep";
import Notes from "@/components/MyProfile/ViewCustomOrderDetails/Notes";
import OrderInfo from "@/components/MyProfile/ViewCustomOrderDetails/OrderInfo";
import PaymentSummary from "@/components/MyProfile/ViewCustomOrderDetails/PaymentSummary";

const ViewCustomOrderPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  const customorder = await GetCustomOrder(id);

  if (!customorder) return notFound();

  return (
    <section className='flex-1 space-y-6'>
      {/* Header */}
      <Header />

      {/* Order Info */}
      <OrderInfo customorder={customorder} />

      {/* Items */}
      <Items customorder={customorder} />

      {/* Payment Summary */}
      <PaymentSummary customorder={customorder} />

      {/* Next Step */}
      {customorder.status !== "archived_projects" && (
        <NextStep customorder={customorder} />
      )}

      {/* Notes (Optional) */}
      {customorder.notes && <Notes customorder={customorder} />}
    </section>
  );
};

export default ViewCustomOrderPage;
