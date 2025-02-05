import { CartProduct, Product } from '../types/Product';
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

export const getProductsByIds = async (
  items: { id: number; cartId: number; quantity: number }[],
) => {
  const productRequests = items.map(item => getProductById(item.id));

  const products = await Promise.all(productRequests);

  const productsWithQuantities: CartProduct[] = products.map(product => {
    const item = items.find(el => el.id === product.id);

    if (!item) {
      throw new Error(
        `No matching item found for product with ID: ${product.id}`,
      );
    }

    return { ...product, quantity: item.quantity, cartId: item.cartId };
  });

  return productsWithQuantities.sort(
    (item1, item2) => item1.cartId - item2.cartId,
  );
};
