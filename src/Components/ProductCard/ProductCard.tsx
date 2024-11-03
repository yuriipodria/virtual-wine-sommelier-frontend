import { Card, Columns, Content } from 'react-bulma-components';
import styles from './ProductCard.module.scss';

export const ProductCard = () => {
  return (
    <Columns.Column size={2}>
      <Card className={styles.card}>
        <Card.Image size="4by3" src="https://placehold.co/600x400" />

        <Card.Header>
          <Card.Header.Title>Lorem, ipsum.</Card.Header.Title>
        </Card.Header>

        <Card.Content>
          <Content>
            <p>Country: Ukraine</p>
            <p>Type: Dry</p>
            <p>Color: Red</p>
          </Content>
        </Card.Content>

        <Card.Footer>
          <Card.Footer.Item>Price: 49.99$</Card.Footer.Item>
        </Card.Footer>
      </Card>
    </Columns.Column>
  );
};
