interface CartItem {
  id: number;
  wineId: number;
  wineName: string;
  quantity: number;
}

export interface CartResponse {
  id: number;
  userId: number;
  cartItems: CartItem[];
}
