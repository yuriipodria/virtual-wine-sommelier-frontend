import { Columns } from 'react-bulma-components';
import { ProductCard } from '../ProductCard';

export const ProductsList = () => {
  return (
    <Columns p={6}>
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
