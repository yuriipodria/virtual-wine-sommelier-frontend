import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Block, Button, Heading, Image, Loader } from 'react-bulma-components';
import { Tag } from '../Tag';
import styles from './ProductPage.module.scss';
import { useCallback, useEffect, useState } from 'react';
import { Product } from '../../types/Product';
import { getProductById } from '../../api/products';
import { useParams } from 'react-router-dom';
import { addToCart } from '../../api/cart';

export const ProductPage = () => {
  const id = +(useParams().id || 1);
  const [product, setProduct] = useState<Product | null>(null);

  const onClick = useCallback(
    (quantity: number) => {
      addToCart(id, quantity);
    },
    [id],
  );

  useEffect(() => {
    getProductById(id)
      .then(setProduct)
      .catch(error => {
        throw error;
      });
  }, [id]);

  if (!product) {
    return <Loader p={4} m={6} />;
  }

  const { name, price, country, color, type, strength, grape, description } =
    product;

  return (
    <Block className={styles.outer_block}>
      <Heading size={2}>{name}</Heading>

      <Block className={styles.image_block} mb={6}>
        <Image className={styles.image} src="https://placehold.co/600x400" />

        <Block className={styles.price_tags_block}>
          <Block textSize={3}>
            Ціна:&nbsp;<span className={styles.price}>{price} грн</span>
          </Block>

          <Block className={styles.tags_block}>
            <Tag text={country} keyName="country" />
            <Tag text={color} keyName="color" />
            <Tag text={type} keyName="type" />
            <Tag text={strength} keyName="strength" />
            <Tag text={grape} keyName="grape" />
          </Block>
        </Block>
      </Block>

      <Block>
        <Heading textSize={4} textWeight="bold" subtitle mb={2}>
          Опис:
        </Heading>

        <Block textSize={5}>{description}</Block>
      </Block>

      <Button
        className={styles.button}
        textWeight="semibold"
        textSize={5}
        onClick={() => onClick(1)}
      >
        Додати до кошика
        <FontAwesomeIcon className={styles.icon} icon={faCartPlus} />
      </Button>
    </Block>
  );
};
