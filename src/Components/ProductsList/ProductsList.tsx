/* eslint-disable @typescript-eslint/indent */
import { Columns } from 'react-bulma-components';
import { ProductCard } from '../ProductCard';
import styles from './ProductsList.module.scss';
import { CartProduct } from '../../types/Product';
import { ProductQuantityCard } from '../ProductQuantityCard';

export const ProductsList: React.FC<{
  setProductsFromServer: React.Dispatch<React.SetStateAction<CartProduct[]>>;
  toDisplay: CartProduct[];
  isCartRoute: boolean;
}> = ({ setProductsFromServer, toDisplay, isCartRoute }) => {
  return (
    <Columns className={styles.columns} breakpoint="mobile" mb="0">
      {isCartRoute
        ? toDisplay.map(product => (
            <ProductQuantityCard
              setProductsFromServer={setProductsFromServer}
              product={product}
              key={product.id}
            />
          ))
        : toDisplay.map(product => (
            <ProductCard product={product} key={product.id} />
          ))}
    </Columns>
  );
};
