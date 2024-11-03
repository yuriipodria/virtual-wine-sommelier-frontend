import { ProductsList } from '../ProductsList';
import { Sidebar } from '../Sidebar';
import styles from './Catalog.module.scss';

export const Catalog = () => {
  return (
    <div className={styles.catalog}>
      <Sidebar />

      <ProductsList />
    </div>
  );
};
