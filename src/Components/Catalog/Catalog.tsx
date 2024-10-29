import { ProductList } from '../ProductList';
import { Sidebar } from '../Sidebar';

export const Catalog = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start' }}>
      <Sidebar />
      <ProductList />
    </div>
  );
};
