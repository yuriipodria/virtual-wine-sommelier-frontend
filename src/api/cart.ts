import { Product } from '../types/Product';
import { client } from '../utils/fetchClient';

interface CartResponse {
  id: number;
  userId: number;
  cartItems: Product[];
}

export const getCart = () => {
  return client.get<CartResponse>(`/cart`);
};
