"use client";

import { Suspense, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";

import Tabs from "./Tabs";
import DataCards from "./DataCards";
import DataCardsLoading from "@/components/SharedComponents/Orders/DataCardsLoading";
import DataCardsError from "@/components/SharedComponents/Orders/DataCardsError";
import UniversalHeader from "../UniversalHeader";

interface Props {
  userId: string;
}

export default function MyOrders({ userId }: Props) {
  const [activeTab, setActiveTab] = useState("active_projects");

  return (
    <section className='flex-1 space-y-10'>
      {/* Header */}
      <UniversalHeader
        title='My Orders'
        description='View and manage all your couture orders.'
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
}
