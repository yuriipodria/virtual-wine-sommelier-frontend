import React, { ChangeEvent, useCallback, useState } from 'react';
import { Button, Form, Modal } from 'react-bulma-components';
import { validateEmail } from '../../utils/validateEmail';
import { loginUser } from '../../api/auth';
import { setAuthToken } from '../../utils/authTokenCookie';
import { useNotification } from '../NotificationContext';

interface Props {
  isShown: boolean;
  setIsShown: (value: boolean) => void;
}

export const LogInModal: React.FC<Props> = ({ isShown, setIsShown }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { showNotification } = useNotification();

  const [errors, setErrors] = useState({
    emailRequired: '',
    emailLength: '',
    emailFormedIncorrectly: '',
    passwordRequired: '',
    passwordLength: '',
  });

  const handleEmailChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);

    setErrors(current => ({
      ...current,
      emailFormedIncorrectly: '',
      emailLength: '',
      emailRequired: '',
    }));
  }, []);

  const handlePasswordChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setPassword(e.target.value);

      setErrors(current => ({
        ...current,
        passwordLength: '',
        passwordRequired: '',
      }));
    },
    [],
  );

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const newErrors = { ...errors };

      if (!email) {
        newErrors.emailRequired = 'Email is required';
      } else if (email.length < 8 || email.length > 35) {
        newErrors.emailLength = 'Email should be between 8 and 35 characters';
      } else if (!validateEmail(email)) {
        newErrors.emailFormedIncorrectly = 'Please enter a valid email';
      }

      if (!password) {
        newErrors.passwordRequired = 'Password is required';
      } else if (password.length < 8 || password.length > 35) {
        newErrors.passwordLength =
          'Password should be between 8 and 35 characters';
      }

      if (Object.values(newErrors).some(error => error)) {
        setErrors(newErrors);

        return;
      }

      try {
        setIsLoading(true);
        const { token } = await loginUser({ email, password });

        setAuthToken(token);
        showNotification('successNotif', 'You successfully logged in');
        setIsShown(false);
      } catch (error) {
        showNotification('warningNotif', 'Wrong email or password');
        throw error;
      } finally {
        setIsLoading(false);
      }
    },
    [errors, email, password, showNotification, setIsShown],
  );

  return (
    <Modal showClose={false} show={isShown} onClose={() => setIsShown(false)}>
      <Modal.Card>
        <Modal.Card.Header>
          <Modal.Card.Title>Log In</Modal.Card.Title>
        </Modal.Card.Header>

        <form onSubmit={handleSubmit}>
          <Modal.Card.Body>
            <Form.Field>
              <Form.Label htmlFor="email-input">Email</Form.Label>

              <Form.Control>
                <Form.Input
                  id="email-input"
                  placeholder="example@gmail.com"
                  color={
                    errors.emailFormedIncorrectly ||
                    errors.emailRequired ||
                    errors.emailLength
                      ? 'danger'
                      : ''
                  }
                  value={email}
                  onChange={handleEmailChange}
                />

                {errors.emailRequired && (
                  <p className="help is-danger">{errors.emailRequired}</p>
                )}

                {errors.emailLength && (
                  <p className="help is-danger">{errors.emailLength}</p>
                )}

                {errors.emailFormedIncorrectly && (
                  <p className="help is-danger">
                    {errors.emailFormedIncorrectly}
                  </p>
                )}
              </Form.Control>
            </Form.Field>

            <Form.Field>
              <Form.Label htmlFor="password-input">Password</Form.Label>

              <Form.Control>
                <Form.Input
                  id="password-input"
                  type="password"
                  placeholder="Password"
                  color={
                    errors.passwordLength || errors.passwordRequired
                      ? 'danger'
                      : ''
                  }
                  value={password}
                  onChange={handlePasswordChange}
                />

                {errors.passwordRequired && (
                  <p className="help is-danger">{errors.passwordRequired}</p>
                )}

                {errors.passwordLength && (
                  <p className="help is-danger">{errors.passwordLength}</p>
                )}
              </Form.Control>
            </Form.Field>
          </Modal.Card.Body>

          <Modal.Card.Footer renderAs={Button.Group} align="center">
            <Form.Field kind="group">
              <Form.Control>
                <Button color="primary" textColor="white" loading={isLoading}>
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
};
