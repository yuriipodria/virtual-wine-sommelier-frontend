import { Navbar, Heading } from 'react-bulma-components';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import { SignUpModal } from '../SignUpModal';
import { useState } from 'react';
import { LogInModal } from '../LogInModal';

export const Header = () => {
  const [isSignUpModalShown, setIsSignUpModalShown] = useState(false);
  const [isLogInModalShown, setIsLogInModalShown] = useState(false);

  return (
    <>
      <Navbar className={styles.navbar} mb={5} color="primary">
        <Navbar.Brand>
          <Navbar.Item renderAs={Link} to="/">
            <Heading size={3} className="has-text-white">
              wine
            </Heading>
          </Navbar.Item>
        </Navbar.Brand>

        <Navbar.Burger />

        <Navbar.Menu>
          <Navbar.Container>
            <Navbar.Item renderAs={Link} to="/">
              Home
            </Navbar.Item>

            <Navbar.Item renderAs={Link} to="/catalog">
              Catalog
            </Navbar.Item>

            <Navbar.Item>Cart</Navbar.Item>
          </Navbar.Container>

          <Navbar.Container align="right">
            <Navbar.Item onClick={() => setIsSignUpModalShown(true)}>
              Sign Up
            </Navbar.Item>

            <Navbar.Item onClick={() => setIsLogInModalShown(true)}>
              Log In
            </Navbar.Item>
          </Navbar.Container>
        </Navbar.Menu>
      </Navbar>

      <SignUpModal
        isShown={isSignUpModalShown}
        setIsShown={setIsSignUpModalShown}
      />

      <LogInModal
        isShown={isLogInModalShown}
        setIsShown={setIsLogInModalShown}
      />
    </>
  );
};
