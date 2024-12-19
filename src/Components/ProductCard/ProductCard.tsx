import { Card, Columns, Content } from 'react-bulma-components';
import styles from './ProductCard.module.scss';
import { Link } from 'react-router-dom';
import { Tag } from '../Tag';
import React from 'react';
import { Product } from '../../types/Product';

export const ProductCard: React.FC<{ product: Product }> = ({
  product: { name, country, color, type, strength, grape, price },
}) => {
  return (
    <Columns.Column
      mobile={{ size: 'one-third' }}
      tablet={{ size: 'one-third' }}
      desktop={{ size: 'one-quarter' }}
      widescreen={{ size: 'one-fifth' }}
    >
      <Card>
        <Card.Image
          renderAs={Link}
          to="/product/1"
          size="4by3"
          src="https://placehold.co/600x400"
        />

        <Card.Header renderAs={Link} to="/product/1">
          <Card.Header.Title>{name}</Card.Header.Title>
        </Card.Header>

        <Card.Content p={4}>
          <Content className={styles.content}>
            <Tag text={country} />
            <Tag text={color} />
            <Tag text={type} />
            <Tag text={strength} />
            <Tag text={grape} />
          </Content>
        </Card.Content>

        <Card.Footer>
          <Card.Footer.Item>
            Ціна:&nbsp;<span className={styles.price}>{price} грн</span>
          </Card.Footer.Item>
        </Card.Footer>
      </Card>
    </Columns.Column>
  );
};
