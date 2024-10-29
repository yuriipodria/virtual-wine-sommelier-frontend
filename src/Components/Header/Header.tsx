import { Navbar, Heading } from 'react-bulma-components';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import { SignUpModal } from '../SignUpModal';
import { useState } from 'react';

export const Header = () => {
  const [isSignUpModalShown, setIsSignUpModalShown] = useState(false);

  return (
    <>
      <Navbar className={styles.navbar} mb={5} color="primary">
        <Navbar.Brand>
          <Navbar.Item>
            <Link to="/">
              <div style={{ height: '100%' }}>
                <Heading size={3} className="has-text-white">
                  wine
                </Heading>
              </div>
            </Link>
          </Navbar.Item>
        </Navbar.Brand>

        <Navbar.Burger />

        <Navbar.Menu>
          <Navbar.Container>
            <Navbar.Item>
              <Link to="/" style={{ all: 'unset' }}>
                Home
              </Link>
            </Navbar.Item>

            <Navbar.Item>
              <Link to="/catalog" style={{ all: 'unset' }}>
                Catalog
              </Link>
            </Navbar.Item>

            <Navbar.Item>Cart</Navbar.Item>
          </Navbar.Container>

          <Navbar.Container align="right">
            <Navbar.Item onClick={() => setIsSignUpModalShown(true)}>
              Sign Up
            </Navbar.Item>

            <Navbar.Item>Log In</Navbar.Item>
          </Navbar.Container>
        </Navbar.Menu>
      </Navbar>

      <SignUpModal
        isShown={isSignUpModalShown}
        setIsShown={setIsSignUpModalShown}
      />
    </>
  );
};
