import { ChangeEvent, useCallback, useState } from 'react';
import { Button, Columns, Form, Modal } from 'react-bulma-components';
import { registerUser } from '../../api/users';
import { RegisterData } from '../../types/RegisterData';
import styles from './SignUpModal.module.scss';
import { validateEmail } from '../../utils/validateEmail';

interface Props {
  isShown: boolean;
  setIsShown: (value: boolean) => void;
}

export const SignUpModal: React.FC<Props> = ({ isShown, setIsShown }) => {
  const [userData, setUserData] = useState<RegisterData>({
    email: '',
    password: '',
    repeatPassword: '',
    firstName: '',
    lastName: '',
    shippingAddress: {
      street: '',
      city: '',
      area: '',
      zipCode: '',
    },
  });

  const [errors, setErrors] = useState({
    firstNameRequired: '',
    lastNameRequired: '',
    emailRequired: '',
    emailFormedIncorrectly: '',
    passwordRequired: '',
    passwordLength: '',
    passwordFormedIncorrectly: '',
    repeatPasswordRequired: '',
    passwordsDontMatch: '',
    streetRequired: '',
    cityRequired: '',
    areaRequired: '',
    zipCodeRequired: '',
    zipCodeLength: '',
  });

  const [isLoading, setIsLoading] = useState(false);

  const validatePassword = useCallback((password: string) => {
    return !!password.match(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!-]).{8,35}$/,
    );
  }, []);

  const handleFirstNameChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setUserData(currentData => ({
        ...currentData,
        firstName: e.target.value,
      }));

      setErrors(currentErrors => ({ ...currentErrors, firstNameRequired: '' }));
    },
    [],
  );

  const handleLastNameChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setUserData(currentData => ({
        ...currentData,
        lastName: e.target.value,
      }));

      setErrors(currentErrors => ({ ...currentErrors, lastNameRequired: '' }));
    },
    [],
  );

  const handleEmailChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setUserData(currentData => ({ ...currentData, email: e.target.value }));

    setErrors(currentErrors => ({
      ...currentErrors,
      emailRequired: '',
      emailFormedIncorrectly: '',
    }));
  }, []);

  const handlePasswordChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setUserData(currentData => ({
        ...currentData,
        password: e.target.value,
      }));

      setErrors(currentErrors => ({
        ...currentErrors,
        passwordRequired: '',
        passwordLength: '',
        passwordFormedIncorrectly: '',
      }));
    },
    [],
  );

  const handleRepeatPasswordChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setUserData(currentData => ({
        ...currentData,
        repeatPassword: e.target.value,
      }));

      setErrors(currentErrors => ({
        ...currentErrors,
        repeatPasswordRequired: '',
        passwordsDontMatch: '',
      }));
    },
    [],
  );

  const handleStreetChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setUserData(currentData => ({
      ...currentData,
      shippingAddress: {
        ...currentData.shippingAddress,
        street: e.target.value,
      },
    }));

    setErrors(currentErrors => ({ ...currentErrors, streetRequired: '' }));
  }, []);

  const handleCityChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setUserData(currentData => ({
      ...currentData,
      shippingAddress: {
        ...currentData.shippingAddress,
        city: e.target.value,
      },
    }));

    setErrors(currentErrors => ({ ...currentErrors, cityRequired: '' }));
  }, []);

  const handleAreaChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setUserData(currentData => ({
      ...currentData,
      shippingAddress: {
        ...currentData.shippingAddress,
        area: e.target.value,
      },
    }));

    setErrors(currentErrors => ({ ...currentErrors, areaRequired: '' }));
  }, []);

  const handleZipCodeChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setUserData(currentData => ({
        ...currentData,
        shippingAddress: {
          ...currentData.shippingAddress,
          zipCode: e.target.value,
        },
      }));

      setErrors(currentErrors => ({
        ...currentErrors,
        zipCodeRequired: '',
        zipCodeLength: '',
      }));
    },
    [],
  );

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const newErrors = { ...errors };

      if (!userData.firstName) {
        newErrors.firstNameRequired = 'First name is required';
      }

      if (!userData.lastName) {
        newErrors.lastNameRequired = 'Last name is required';
      }

      if (!userData.email) {
        newErrors.emailRequired = 'Email is required';
      } else if (!validateEmail(userData.email)) {
        newErrors.emailFormedIncorrectly = 'Please enter a valid email address';
      }

      if (!userData.password) {
        newErrors.passwordRequired = 'Password is required';
      } else if (
        userData.password.length < 8 ||
        userData.password.length > 35
      ) {
        newErrors.passwordLength =
          'Password should be between 8 and 35 characters';
      } else if (!validatePassword(userData.password)) {
        newErrors.passwordFormedIncorrectly =
          'Password must contain at least one digit, one lowercase letter, ' +
          'one uppercase letter and one special character (@#$%^&+=!-)';
      }

      if (!userData.repeatPassword) {
        newErrors.repeatPasswordRequired = 'Repeat password required';
      } else if (userData.password !== userData.repeatPassword) {
        newErrors.passwordsDontMatch = 'Passwords do not match';
      }

      if (!userData.shippingAddress.street) {
        newErrors.streetRequired = 'Street is required';
      }

      if (!userData.shippingAddress.city) {
        newErrors.cityRequired = 'City is required';
      }

      if (!userData.shippingAddress.zipCode) {
        newErrors.zipCodeRequired = 'ZIP code is required';
      } else if (userData.shippingAddress.zipCode.length !== 5) {
        newErrors.zipCodeLength = 'ZIP code must consist of 5 characters';
      }

      if (!userData.shippingAddress.area) {
        newErrors.areaRequired = 'Area is required';
      }

      if (Object.values(newErrors).some(error => error)) {
        setErrors(newErrors);

        return;
      }

      try {
        setIsLoading(true);
        await registerUser(userData);
      } catch (error) {
        throw error;
      } finally {
        setIsLoading(false);
      }
    },
    [errors, userData, validatePassword],
  );

  return (
    <Modal showClose={false} show={isShown} onClose={() => setIsShown(false)}>
      <Modal.Card className={styles.modal}>
        <Modal.Card.Header>
          <Modal.Card.Title>Sign Up</Modal.Card.Title>
        </Modal.Card.Header>

        <form onSubmit={handleSubmit}>
          <Modal.Card.Body>
            <Columns>
              <Columns.Column size="half">
                <Form.Field>
                  <Form.Label htmlFor="first-name-input">First name</Form.Label>

                  <Form.Control>
                    <Form.Input
                      id="first-name-input"
                      placeholder="John"
                      color={errors.firstNameRequired ? 'danger' : ''}
                      value={userData.firstName}
                      onChange={handleFirstNameChange}
                    />

                    {errors.firstNameRequired && (
                      <p className="help is-danger">
                        {errors.firstNameRequired}
                      </p>
                    )}
                  </Form.Control>
                </Form.Field>
              </Columns.Column>

              <Columns.Column size="half">
                <Form.Field>
                  <Form.Label htmlFor="last-name-input">Last name</Form.Label>

                  <Form.Control>
                    <Form.Input
                      id="last-name-input"
                      placeholder="Doe"
                      color={errors.lastNameRequired ? 'danger' : ''}
                      value={userData.lastName}
                      onChange={handleLastNameChange}
                    />

                    {errors.lastNameRequired && (
                      <p className="help is-danger">
                        {errors.lastNameRequired}
                      </p>
                    )}
                  </Form.Control>
                </Form.Field>
              </Columns.Column>

              <Columns.Column size={12}>
                <Form.Field>
                  <Form.Label htmlFor="email-input">Email</Form.Label>

                  <Form.Control>
                    <Form.Input
                      id="email-input"
                      placeholder="example@gmail.com"
                      color={
                        errors.emailRequired || errors.emailFormedIncorrectly
                          ? 'danger'
                          : ''
                      }
                      value={userData.email}
                      onChange={handleEmailChange}
                    />

                    {errors.emailRequired && (
                      <p className="help is-danger">{errors.emailRequired}</p>
                    )}

                    {errors.emailFormedIncorrectly && (
                      <p className="help is-danger">
                        {errors.emailFormedIncorrectly}
                      </p>
                    )}
                  </Form.Control>
                </Form.Field>
              </Columns.Column>

              <Columns.Column size="half">
                <Form.Field>
                  <Form.Label htmlFor="password-input">Password</Form.Label>

                  <Form.Control>
                    <Form.Input
                      id="password-input"
                      type="password"
                      placeholder="Password"
                      color={
                        errors.passwordFormedIncorrectly ||
                        errors.passwordLength ||
                        errors.passwordRequired
                          ? 'danger'
                          : ''
                      }
                      value={userData.password}
                      onChange={handlePasswordChange}
                    />

                    {errors.passwordRequired && (
                      <p className="help is-danger">
                        {errors.passwordRequired}
                      </p>
                    )}

                    {errors.passwordLength && (
                      <p className="help is-danger">{errors.passwordLength}</p>
                    )}

                    {errors.passwordFormedIncorrectly && (
                      <p className="help is-danger">
                        {errors.passwordFormedIncorrectly}
                      </p>
                    )}
                  </Form.Control>
                </Form.Field>
              </Columns.Column>

              <Columns.Column size="half">
                <Form.Field>
                  <Form.Label htmlFor="password-confirm-input">
                    Confirm password
                  </Form.Label>

                  <Form.Control>
                    <Form.Input
                      id="password-confirm-input"
                      type="password"
                      placeholder="Confirm password"
                      color={
                        errors.repeatPasswordRequired ||
                        errors.passwordsDontMatch
                          ? 'danger'
                          : ''
                      }
                      value={userData.repeatPassword}
                      onChange={handleRepeatPasswordChange}
                    />

                    {errors.repeatPasswordRequired && (
                      <p className="help is-danger">
                        {errors.repeatPasswordRequired}
                      </p>
                    )}

                    {errors.passwordsDontMatch && (
                      <p className="help is-danger">
                        {errors.passwordsDontMatch}
                      </p>
                    )}
                  </Form.Control>
                </Form.Field>
              </Columns.Column>

              <Columns.Column size="half">
                <Form.Field>
                  <Form.Label htmlFor="street-input">Street</Form.Label>

                  <Form.Control>
                    <Form.Input
                      id="street-input"
                      placeholder="123 Maple Street"
                      color={errors.streetRequired ? 'danger' : ''}
                      value={userData.shippingAddress.street}
                      onChange={handleStreetChange}
                    />

                    {errors.streetRequired && (
                      <p className="help is-danger">{errors.streetRequired}</p>
                    )}
                  </Form.Control>
                </Form.Field>
              </Columns.Column>

              <Columns.Column size="half">
                <Form.Field>
                  <Form.Label htmlFor="area-input">Area</Form.Label>

                  <Form.Control>
                    <Form.Input
                      id="area-input"
                      placeholder="Downtown"
                      color={errors.areaRequired ? 'danger' : ''}
                      value={userData.shippingAddress.area}
                      onChange={handleAreaChange}
                    />

                    {errors.areaRequired && (
                      <p className="help is-danger">{errors.areaRequired}</p>
                    )}
                  </Form.Control>
                </Form.Field>
              </Columns.Column>

              <Columns.Column size="half">
                <Form.Field>
                  <Form.Label htmlFor="zip-code-input">ZIP Code</Form.Label>

                  <Form.Control>
                    <Form.Input
                      id="zip-code-input"
                      placeholder="12345"
                      color={
                        errors.zipCodeRequired || errors.zipCodeLength
                          ? 'danger'
                          : ''
                      }
                      value={userData.shippingAddress.zipCode}
                      onChange={handleZipCodeChange}
                    />

                    {errors.zipCodeRequired && (
                      <p className="help is-danger">{errors.zipCodeRequired}</p>
                    )}

                    {errors.zipCodeLength && (
                      <p className="help is-danger">{errors.zipCodeLength}</p>
                    )}
                  </Form.Control>
                </Form.Field>
              </Columns.Column>

              <Columns.Column size="half">
                <Form.Field>
                  <Form.Label htmlFor="city-input">City</Form.Label>

                  <Form.Control>
                    <Form.Input
                      id="city-input"
                      placeholder="Springfield"
                      color={errors.cityRequired ? 'danger' : ''}
                      value={userData.shippingAddress.city}
                      onChange={handleCityChange}
                    />

                    {errors.cityRequired && (
                      <p className="help is-danger">{errors.cityRequired}</p>
                    )}
                  </Form.Control>
                </Form.Field>
              </Columns.Column>
            </Columns>
          </Modal.Card.Body>

          <Modal.Card.Footer renderAs={Button.Group} align="center">
            <Form.Field kind="group">
              <Form.Control>
                <Button color="primary" textColor="white" loading={isLoading}>
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
};
