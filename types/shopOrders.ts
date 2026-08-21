export interface ShopOrder {
  _id: string;
  referenceNumber: string;
  clientId: {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
  };
  paymentId: {
    _id: string;
    paymongoFee: number;
    paymongoForeignFee: number;
    paymentSource: {
      id: string;
      type: string;
      brand: string;
      last4: string;
      country: string;
    };
    paidAt: Date;
  };
  checkoutCartSession: string;
  items: {
    _id: string;
    name: string;
    productId: string;
    sku: string;
    quantity: number;
    price: number;
    imgUrl: string;
  }[];
  fulfilment: {
    method: "fordelivery" | "forpickup";
    shippingFee: number;
    address: string;
    city: string;
    postalCode: string;
    dateOfPickup: string;
    timeOfPickup: string;
  };
  timeLine: [
    {
      _id: string;
      eventName: string;
      date: string;
    },
  ];
  shippingFee: number;
  totalAmount: number;
  orderStatus:
    | "confirmed"
    | "preparing"
    | "ready_for_pickup"
    | "out_for_delivery"
    | "completed"
    | "cancelled";
  dateOrdered: string;
  completedAt: string;
  cancelledAt: string;
  createdAt: string;
  updatedAt: string;
}
