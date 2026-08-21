"use client";

import { CustomOrder } from "@/types/customOrders";

import Header from "./Header";
import Orders from "./Orders/Orders";

export default function CoutureDashboard({
  customOrders,
}: {
  customOrders: CustomOrder[];
}) {
  if (!customOrders || customOrders.length === 0) {
    return null;
  }

  return (
    <section className='pt-5 space-y-8'>
      {/* Header */}
      <Header />

      {/* Orders */}
      <Orders customOrders={customOrders} />
    </section>
  );
}
