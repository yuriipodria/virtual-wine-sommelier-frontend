import React from 'react';
import { Button, Form, Modal } from 'react-bulma-components';

interface Props {
  isShown: boolean;
  setIsShown: (value: boolean) => void;
}

export const LogInModal: React.FC<Props> = ({ isShown, setIsShown }) => (
  <Modal showClose={false} show={isShown} onClose={() => setIsShown(false)}>
    <Modal.Card>
      <Modal.Card.Header>
        <Modal.Card.Title>Log In</Modal.Card.Title>
      </Modal.Card.Header>

      <form>
        <Modal.Card.Body>
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
        </Modal.Card.Body>

        <Modal.Card.Footer renderAs={Button.Group} align="center">
          <Form.Field kind="group">
            <Form.Control>
              <Button color="success" textColor="white">
                Log In
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
