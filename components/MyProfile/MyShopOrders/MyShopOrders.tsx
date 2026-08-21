"use client";

import { Suspense, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";

import Tabs from "./Tabs";
import DataCards from "./DataCards/DataCards";
import DataCardsLoading from "@/components/SharedComponents/Orders/DataCardsLoading";
import DataCardsError from "@/components/SharedComponents/Orders/DataCardsError";
import UniversalHeader from "../UniversalHeader";

const MyShopOrders = ({ userId }: { userId: string }) => {
  const [activeTab, setActiveTab] = useState("active_orders");
  return (
    <section className='flex-1 space-y-10'>
      {/* Header */}
      <UniversalHeader
        title='My Shop Orders'
        description='View and manage all your ready-to-wear orders.'
      />
      {/* Tabs */}
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      {/* Order List */}
      <ErrorBoundary FallbackComponent={DataCardsError}>
        <Suspense fallback={<DataCardsLoading />}>
          <DataCards activeTab={activeTab} userId={userId} />
        </Suspense>
      </ErrorBoundary>
    </section>
  );
};

export default MyShopOrders;
