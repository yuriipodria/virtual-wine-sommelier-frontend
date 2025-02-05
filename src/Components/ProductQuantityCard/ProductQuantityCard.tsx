import { Box, Button } from 'react-bulma-components';
import { CartProduct } from '../../types/Product';
import { ProductCard } from '../ProductCard';
import styles from './ProductQuantityCard.module.scss';
import { useCallback } from 'react';
import { updateQuantity } from '../../api/cart';

export const ProductQuantityCard: React.FC<{
  product: CartProduct;
  setProductsFromServer: React.Dispatch<React.SetStateAction<CartProduct[]>>;
}> = ({ product, setProductsFromServer }) => {
  const onPlus = useCallback(async () => {
    if (product.quantity >= 99) {
      return;
    }

    setProductsFromServer(current => {
      const updatedProducts = current.map(el =>
        el.id === product.id ? { ...el, quantity: el.quantity + 1 } : el,
      );

      return updatedProducts;
    });

    await updateQuantity(
      product.cartId as number,
      (product.quantity as number) + 1,
    );
  }, [product.cartId, product.id, product.quantity, setProductsFromServer]);

  const onMinus = useCallback(async () => {
    if (product.quantity <= 1) {
      return;
    }

    setProductsFromServer(current => {
      const updatedProducts = current.map(el =>
        el.id === product.id ? { ...el, quantity: el.quantity - 1 } : el,
      );

      return updatedProducts;
    });

    await updateQuantity(
      product.cartId as number,
      (product.quantity as number) - 1,
    );
  }, [product.cartId, product.id, product.quantity, setProductsFromServer]);

  return (
    <>
      <ProductCard product={product}>
        <div className={styles.control}>
          <Button className={styles.button} onClick={onMinus}>
            -
          </Button>

          <Box className={styles.box} mb="0">
            {product.quantity}
          </Box>

          <Button className={styles.button} onClick={onPlus}>
            +
          </Button>
        </div>
      </ProductCard>
    </>
  );
};
