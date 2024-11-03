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

      <form>
        <Modal.Card.Body>
          <Form.Field>
            <Form.Label htmlFor="username-input">Username</Form.Label>

            <Form.Control>
              <Form.Input id="username-input" placeholder="johndoe123" />
            </Form.Control>
          </Form.Field>

          <Form.Field>
            <Form.Label htmlFor="email-input">Email</Form.Label>

            <Form.Control>
              <Form.Input id="email-input" placeholder="example@gmail.com" />
            </Form.Control>
          </Form.Field>

          <Form.Field>
            <Form.Label htmlFor="password-input">Password</Form.Label>

            <Form.Control>
              <Form.Input id="password-input" placeholder="Password" />
            </Form.Control>
          </Form.Field>

          <Form.Field>
            <Form.Label htmlFor="password-confirm-input">
              Confirm password
            </Form.Label>

            <Form.Control>
              <Form.Input
                id="password-confirm-input"
                placeholder="Confirm password"
              />
            </Form.Control>
          </Form.Field>
        </Modal.Card.Body>

        <Modal.Card.Footer renderAs={Button.Group} align="center">
          <Form.Field kind="group">
            <Form.Control>
              <Button color="success" textColor="white">
                Sign Up
              </Button>
            </Form.Control>

            <Form.Control>
              <Button onClick={() => setIsShown(false)}>Cancel</Button>
            </Form.Control>
          </Form.Field>
        </Modal.Card.Footer>
      </form>
    </Modal.Card>
  </Modal>
);
