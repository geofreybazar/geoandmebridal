export interface Items {
  productId: string;
  variantId: string;
  sku: string;
  quantity: number;
  price: number;
  name: string;
  description: string;
  maxQuantity: number;
  imgUrl: string;
}

export interface CartType {
  _id: string;
  clientId: string;
  items: Items[];
  totalPrice: number;
  status: "active" | "completed" | "cancelled";
  createdAt: string;
  updatedAt: string;
}
