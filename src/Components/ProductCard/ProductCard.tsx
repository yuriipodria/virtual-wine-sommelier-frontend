import { Card, Columns, Content } from 'react-bulma-components';
import styles from './ProductCard.module.scss';
import { Link } from 'react-router-dom';
import { Tag } from '../Tag';
import React, { ReactNode } from 'react';
import { Product } from '../../types/Product';

export const ProductCard: React.FC<{
  product: Product;
  children?: ReactNode;
}> = ({
  product: { name, country, color, type, strength, grape, price, id },
  children,
}) => {
  return (
    <Columns.Column
      mobile={{ size: 'one-third' }}
      tablet={{ size: 'one-third' }}
      desktop={{ size: 'one-quarter' }}
      widescreen={{ size: 'one-fifth' }}
    >
      <Card mb={2}>
        <Card.Image
          renderAs={Link}
          to={`/product/${id}`}
          size="4by3"
          src="https://placehold.co/600x400"
        />

        <Card.Header renderAs={Link} to="/product/1">
          <Card.Header.Title>{name}</Card.Header.Title>
        </Card.Header>

        <Card.Content p={4}>
          <Content className={styles.content}>
            <Tag text={country} keyName="country" />
            <Tag text={color} keyName="color" />
            <Tag text={type} keyName="type" />
            <Tag text={strength} keyName="strength" />
            <Tag text={grape} keyName="grape" />
          </Content>
        </Card.Content>

        <Card.Footer>
          <Card.Footer.Item>
            Ціна:&nbsp;<span className={styles.price}>{price} грн</span>
          </Card.Footer.Item>
        </Card.Footer>
      </Card>
      {children}
    </Columns.Column>
  );
};
