// Another colour/size of the item's product (sent with the cart)
export interface CartOption {
  _id: string;
  color: { hex: string };
  size: string;
  availableStock: number;
}

export interface Items {
  _id?: string;
  options?: CartOption[];
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
