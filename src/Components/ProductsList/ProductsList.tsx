import { Columns } from 'react-bulma-components';
import { ProductCard } from '../ProductCard';
import styles from './ProductsList.module.scss';
import { Product } from '../../types/Product';

export const ProductsList: React.FC<{ toDisplay: Product[] }> = ({
  toDisplay,
}) => {
  return (
    <>
      <Columns className={styles.columns} breakpoint="mobile" mb="0">
        {toDisplay.map(product => (
          <ProductCard product={product} key={product.id} />
        ))}
      </Columns>
    </>
  );
};
