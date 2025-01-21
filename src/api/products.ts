import { Product } from '../types/Product';
import { client } from '../utils/fetchClient';

interface ProductsResponse {
  totalProducts: number;
  wineDtos: Product[];
}

export const getAllProducts = () => {
  return client.get<ProductsResponse>(`/products`);
};

export const getProductById = (id: number) => {
  return client.get<Product>(`/products/${id}`);
};

export const getProductsById = async (ids: number[]) => {
  const productRequests = ids.map(id => getProductById(id));

  const products = await Promise.all(productRequests);

  return products;
};
