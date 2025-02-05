import { CartResponse } from '../types/CartResponse';
import { client } from '../utils/fetchClient';

export const getCart = () => {
  return client.get<CartResponse>(`/cart`);
};

export const addToCart = (wineId: number, quantity: number) => {
  return client.post<CartResponse>(`/cart`, { wineId, quantity });
};

export const updateQuantity = (wineId: number, quantity: number) => {
  return client.put<CartResponse>(`/cart/items/${wineId}`, { quantity });
};
