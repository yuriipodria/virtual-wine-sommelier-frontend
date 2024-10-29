import { Card, Columns, Content } from 'react-bulma-components';

export const ProductCard = () => {
  return (
    <Columns.Column size={2}>
      <Card style={{ width: 300 }}>
        <Card.Image
          size="4by3"
          src="http://bulma.io/images/placeholders/1280x960.png"
        />

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
