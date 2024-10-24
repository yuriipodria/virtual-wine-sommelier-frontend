import { Button, Card, Content, Media } from 'react-bulma-components';

export const ProductCard = () => {
  return (
    <Card>
      <Card.Content>
        <Media>
          <Media.Item>
            <p className="title is-4">Product Name</p>
            <p className="subtitle is-6">$20.00</p>
          </Media.Item>
        </Media>
        <Content>
          This is a short description of the product. It highlights key features
          and benefits.
        </Content>
      </Card.Content>
      <Card.Footer>
        <Card.Footer.Item>
          <Button color="primary">Add to Cart</Button>
        </Card.Footer.Item>
      </Card.Footer>
    </Card>
  );
};
