import { Columns } from 'react-bulma-components';
import { ProductCard } from '../ProductCard';
import styles from './ProductsList.module.scss';

export const ProductsList: React.FC<{ toDisplay: number[] }> = ({
  toDisplay,
}) => {
  return (
    <>
      <Columns className={styles.columns} breakpoint="mobile" mb="0">
        {toDisplay.map(product => (
          <ProductCard product={`${product}`} key={product} />
        ))}
      </Columns>
    </>
  );
};
