import { Product } from '../types/Product';
import { client } from '../utils/fetchClient';

export const getProductsByPageSize = (page: number, size: number) => {
  return client.get<Product[]>(`/products?page=${page}&size=${size}`);
};
