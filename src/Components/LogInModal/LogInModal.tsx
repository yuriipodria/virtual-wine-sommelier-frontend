import React from 'react';
import { Button, Form, Modal } from 'react-bulma-components';

interface Props {
  isShown: boolean;
  setIsShown: (value: boolean) => void;
}

export const LogInModal: React.FC<Props> = ({ isShown, setIsShown }) => {
  return (
    <Modal showClose={false} show={isShown} onClose={() => setIsShown(false)}>
      <Modal.Card>
        <Modal.Card.Header>
          <Modal.Card.Title>Log In</Modal.Card.Title>
        </Modal.Card.Header>

        <Modal.Card.Body>
          <form>
            <Form.Field>
              <Form.Label>Email</Form.Label>

              <Form.Control>
                <Form.Input />
              </Form.Control>
            </Form.Field>

            <Form.Field>
              <Form.Label>Password</Form.Label>

              <Form.Control>
                <Form.Input />
              </Form.Control>
            </Form.Field>
          </form>
        </Modal.Card.Body>

        <Modal.Card.Footer renderAs={Button.Group} align="center">
          <Button color="success" style={{ color: 'white' }}>
            Log In
          </Button>
          <Button onClick={() => setIsShown(false)}>Cancel</Button>
        </Modal.Card.Footer>
      </Modal.Card>
    </Modal>
  );
};
