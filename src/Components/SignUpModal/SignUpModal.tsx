import { Button, Form, Modal } from 'react-bulma-components';

interface Props {
  isShown: boolean;
  setIsShown: (value: boolean) => void;
}

export const SignUpModal: React.FC<Props> = ({ isShown, setIsShown }) => (
  <Modal showClose={false} show={isShown} onClose={() => setIsShown(false)}>
    <Modal.Card>
      <Modal.Card.Header>
        <Modal.Card.Title>Sign Up</Modal.Card.Title>
      </Modal.Card.Header>

      <Modal.Card.Body>
        <form>
          <Form.Field>
            <Form.Label htmlFor="username-input">Username</Form.Label>

            <Form.Control>
              <Form.Input id="username-input" />
            </Form.Control>
          </Form.Field>

          <Form.Field>
            <Form.Label htmlFor="email-input">Email</Form.Label>

            <Form.Control>
              <Form.Input id="email-input" />
            </Form.Control>
          </Form.Field>

          <Form.Field>
            <Form.Label htmlFor="password-input">Password</Form.Label>

            <Form.Control>
              <Form.Input id="password-input" />
            </Form.Control>
          </Form.Field>

          <Form.Field>
            <Form.Label htmlFor="password-confirm-input">
              Confirm password
            </Form.Label>

            <Form.Control>
              <Form.Input id="password-confirm-input" />
            </Form.Control>
          </Form.Field>
        </form>
      </Modal.Card.Body>

      <Modal.Card.Footer renderAs={Button.Group} align="center">
        <Button color="success" style={{ color: 'white' }}>
          Sign Up
        </Button>
        <Button onClick={() => setIsShown(false)}>Cancel</Button>
      </Modal.Card.Footer>
    </Modal.Card>
  </Modal>
);
