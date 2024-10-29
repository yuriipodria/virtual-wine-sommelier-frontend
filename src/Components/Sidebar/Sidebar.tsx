import { Block, Form, Heading } from 'react-bulma-components';
import { Checkbox } from '../Checkbox';

export const Sidebar = () => (
  <Block ml={2}>
    <aside>
      <form style={{ width: 'max-content' }}>
        <Form.Field mb={5}>
          <Form.Label>
            <Heading size={5} style={{ marginBottom: '6px' }}>
              Mood
            </Heading>
          </Form.Label>

          <Form.Control>
            <Checkbox labelText="Celebratory" />
            <Checkbox labelText="Adventurous" />
            <Checkbox labelText="Indulgent" />
            <Checkbox labelText="Nostalgic" />
            <Checkbox labelText="Romantic" />
          </Form.Control>
        </Form.Field>

        <Form.Field mb={5}>
          <Form.Label>
            <Heading size={5} style={{ marginBottom: '6px' }}>
              Purpose
            </Heading>
          </Form.Label>

          <Form.Control>
            <Checkbox labelText="Gift" />
            <Checkbox labelText="Complement" />
            <Checkbox labelText="Cooking" />
            <Checkbox labelText="Socialization" />
            <Checkbox labelText="Curiosity" />
          </Form.Control>
        </Form.Field>

        <Form.Field mb={5}>
          <Form.Label>
            <Heading size={5} style={{ marginBottom: '6px' }}>
              Color
            </Heading>
          </Form.Label>

          <Form.Control>
            <Checkbox labelText="Red" />
            <Checkbox labelText="White" />
          </Form.Control>
        </Form.Field>

        <Form.Field mb={5}>
          <Form.Label>
            <Heading size={5} style={{ marginBottom: '6px' }}>
              Country
            </Heading>
          </Form.Label>

          <Form.Control>
            <Checkbox labelText="France" />
            <Checkbox labelText="Italy" />
            <Checkbox labelText="Spain" />
            <Checkbox labelText="Ukraine" />
            <Checkbox labelText="United States" />
            <Checkbox labelText="Australia" />
            <Checkbox labelText="Argentina" />
            <Checkbox labelText="Chile" />
            <Checkbox labelText="Germany" />
            <Checkbox labelText="South Africa" />
          </Form.Control>
        </Form.Field>

        <Form.Field mb={5}>
          <Form.Label>
            <Heading size={5} style={{ marginBottom: '6px' }}>
              Type
            </Heading>
          </Form.Label>

          <Form.Control>
            <Checkbox labelText="Dry" />
            <Checkbox labelText="Semi-dry" />
            <Checkbox labelText="Semi-sweet" />
            <Checkbox labelText="Sweet" />
          </Form.Control>
        </Form.Field>

        <Form.Field mb={5} style={{ width: '120px' }}>
          <Form.Label>
            <Heading size={5} style={{ marginBottom: '6px' }}>
              Price
            </Heading>
          </Form.Label>

          <Form.Control>
            <p>From</p>
            <Form.Input />
            <p>To</p>
            <Form.Input />
          </Form.Control>
        </Form.Field>
      </form>
    </aside>
  </Block>
);
