import { Card, Columns, Content } from 'react-bulma-components';
import styles from './ProductCard.module.scss';
import { Link } from 'react-router-dom';
import { Tag } from '../Tag';
import React from 'react';

export const ProductCard: React.FC<{ product: string }> = ({ product }) => {
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
          <Card.Header.Title>Lorem, ipsum.</Card.Header.Title>
        </Card.Header>

        <Card.Content p={4}>
          <Content className={styles.content}>
            <Tag text={product} />
            <Tag text="aaa" />
            <Tag text="aaa" />
            <Tag text="aaa" />
            <Tag text="aaaaaaaaaaa" />
            <Tag text="asdafgdh" />
          </Content>
        </Card.Content>

        <Card.Footer>
          <Card.Footer.Item>Price: 49.99$</Card.Footer.Item>
        </Card.Footer>
      </Card>
    </Columns.Column>
  );
};
