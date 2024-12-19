import { Block, Button, Form, Heading } from 'react-bulma-components';
import { Checkbox } from '../Checkbox';
import styles from './Filters.module.scss';

export const Filters = () => (
  <Block className={styles.block} mb="0">
    <aside>
      <form className={styles.form}>
        <Form.Field className={styles.field} mb={5}>
          <Form.Label>
            <Heading size={5} className={styles.heading}>
              Mood
            </Heading>
          </Form.Label>

          <Form.Control>
            <Checkbox labelText="Celebratory" id="celebratory-checkbox" />
            <Checkbox labelText="Adventurous" id="adventurous-checkbox" />
            <Checkbox labelText="Indulgent" id="indulgent-checkbox" />
            <Checkbox labelText="Nostalgic" id="nostalgic-checkbox" />
            <Checkbox labelText="Romantic" id="romantic-checkbox" />
          </Form.Control>
        </Form.Field>

        <Form.Field className={styles.field} mb={5}>
          <Form.Label>
            <Heading size={5} className={styles.heading}>
              Purpose
            </Heading>
          </Form.Label>

          <Form.Control>
            <Checkbox labelText="Gift" id="gift-checkbox" />
            <Checkbox labelText="Complement" id="complement-checkbox" />
            <Checkbox labelText="Cooking" id="cooking-checkbox" />
            <Checkbox labelText="Socialization" id="socialization-checkbox" />
            <Checkbox labelText="Curiosity" id="curiousity-checkbox" />
          </Form.Control>
        </Form.Field>

        <Form.Field className={styles.field} mb={5}>
          <Form.Label>
            <Heading size={5} className={styles.heading}>
              Color
            </Heading>
          </Form.Label>

          <Form.Control>
            <Checkbox labelText="Red" id="red-checkbox" />
            <Checkbox labelText="White" id="white-checkbox" />
          </Form.Control>
        </Form.Field>

        <Form.Field className={styles.field} mb={5}>
          <Form.Label>
            <Heading size={5} className={styles.heading}>
              Country
            </Heading>
          </Form.Label>

          <Form.Control>
            <Checkbox labelText="France" id="france-checkbox" />
            <Checkbox labelText="Italy" id="italy-checkbox" />
            <Checkbox labelText="Spain" id="spain-checkbox" />
            <Checkbox labelText="Ukraine" id="ukraine-checkbox" />
            <Checkbox labelText="United States" id="us-checkbox" />
            <Checkbox labelText="Australia" id="australia-checkbox" />
            <Checkbox labelText="Argentina" id="argentina-checkbox" />
            <Checkbox labelText="Chile" id="chile-checkbox" />
            <Checkbox labelText="Germany" id="germany-checkbox" />
            <Checkbox labelText="South Africa" id="sa-checkbox" />
          </Form.Control>
        </Form.Field>

        <Form.Field className={styles.field} mb={5}>
          <Form.Label>
            <Heading size={5} className={styles.heading}>
              Type
            </Heading>
          </Form.Label>

          <Form.Control>
            <Checkbox labelText="Dry" id="dry-checkbox" />
            <Checkbox labelText="Semi-dry" id="sdry-checkbox" />
            <Checkbox labelText="Semi-sweet" id="ssweet-checkbox" />
            <Checkbox labelText="Sweet" id="sweet-checkbox" />
          </Form.Control>
        </Form.Field>

        <Form.Field
          className={`${styles.field} ${styles.price_form_field}`}
          mb={5}
        >
          <Form.Label>
            <Heading size={5} className={styles.heading}>
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

        <Form.Field>
          <Form.Control
            className={styles.button_group}
            renderAs={Button.Group}
            textAlign="center"
          >
            <Button color="primary">Apply</Button>
            <Button>Reset</Button>
          </Form.Control>
        </Form.Field>
      </form>
    </aside>
  </Block>
);
