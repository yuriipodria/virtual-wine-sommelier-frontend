import { Columns } from 'react-bulma-components';
import { ProductCard } from '../ProductCard';

export const ProductList = () => {
  return (
    <Columns mx={5}>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </Columns>
  );
};
