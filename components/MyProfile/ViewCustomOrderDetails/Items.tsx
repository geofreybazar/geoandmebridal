"use client";

import { useState } from "react";
import { CustomOrder, CustomOrderItem } from "@/types/customOrders";
import { Card, CardContent } from "@/components/ui/card";
import clsx from "clsx";
import { CUSTOM_BRIDAL_PRODUCTS } from "@/utils/constants/customOrdet";

const statusMap: Record<string, string> = {
  design: "Design in progress",
  measurements: "Measurements completed",
  "in-production": "Being carefully crafted",
  fitting: "Preparing for fitting",
  completed: "Completed",
};

const itemSteps = [
  { key: "design", label: "Design" },
  { key: "measurements", label: "Measurements" },
  { key: "in-production", label: "In Production" },
  { key: "fitting", label: "Fitting" },
  { key: "completed", label: "Completed" },
];

const Items = ({ customorder }: { customorder: CustomOrder }) => {
  const [openItemId, setOpenItemId] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setOpenItemId((prev) => (prev === id ? null : id));
  };

  return (
    <Card className='rounded-2xl border border-porcelainBeige shadow-[0_10px_30px_rgba(0,0,0,0.04)]'>
      <CardContent className='space-y-6'>
        <p className='text-xs tracking-widest uppercase text-muted-foreground'>
          Your Pieces
        </p>

        <div className='space-y-5'>
          {customorder.orders.map((item: CustomOrderItem) => {
            const currentIndex = itemSteps.findIndex(
              (s) => s.key === item.status,
            );

            const isOpen = openItemId === item._id;
            const itemName = CUSTOM_BRIDAL_PRODUCTS.find(
              (product) => product.value === item.item,
            );

            return (
              <div key={item._id} className='space-y-3'>
                {/* Item Row */}
                <div
                  onClick={() => toggleItem(item._id)}
                  className='flex justify-between items-center border-b pb-3 cursor-pointer'
                >
                  <div>
                    <p className='text-sm font-medium'>{itemName?.label}</p>
                    <p className='text-xs text-muted-foreground'>
                      Quantity: {item.quantity}
                    </p>
                  </div>

                  <span className='text-xs px-3 py-1 rounded-full bg-ivoryVeil text-warmTaupe'>
                    {statusMap[item.status] || item.status}
                  </span>
                </div>

                {/* Expandable Timeline */}
                {isOpen && (
                  <div className='flex items-center gap-4 overflow-x-auto pb-2'>
                    {itemSteps.map((step, index) => {
                      const isCompleted = index < currentIndex;
                      const isActive = index === currentIndex;

                      return (
                        <div
                          key={step.key}
                          className='flex items-center gap-2 text-xs whitespace-nowrap'
                        >
                          <div
                            className={clsx(
                              "w-2 h-2 rounded-full",
                              isCompleted || isActive
                                ? "bg-warmTaupe"
                                : "bg-gray-300",
                            )}
                          />

                          <span
                            className={clsx(
                              isActive
                                ? "text-warmTaupe font-medium"
                                : "text-muted-foreground",
                            )}
                          >
                            {step.label}
                          </span>

                          {index !== itemSteps.length - 1 && (
                            <div className='w-6 h-[1px] bg-porcelainBeige' />
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default Items;
