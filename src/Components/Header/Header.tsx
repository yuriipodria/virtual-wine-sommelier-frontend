import { Navbar, Heading } from 'react-bulma-components';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import { SignUpModal } from '../SignUpModal';
import { useState } from 'react';
import { LogInModal } from '../LogInModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faList,
  faShoppingCart,
  faSignIn,
  faUserCircle,
} from '@fortawesome/free-solid-svg-icons';

export const Header = () => {
  const [isSignUpModalShown, setIsSignUpModalShown] = useState(false);
  const [isLogInModalShown, setIsLogInModalShown] = useState(false);

  return (
    <>
      <Navbar
        id="header"
        className={`${styles.navbar_shadow} ${styles.navbar_overflow}`}
        color="primary"
      >
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
            <Navbar.Item className={styles.navbar_item} renderAs={Link} to="/">
              <FontAwesomeIcon icon={faHome} />
              <p className={styles.icon_p}>Home</p>
            </Navbar.Item>

            <Navbar.Item
              className={styles.navbar_item}
              renderAs={Link}
              to="/catalog"
            >
              <FontAwesomeIcon icon={faList} />
              <p className={styles.icon_p}>Catalog</p>
            </Navbar.Item>

            <Navbar.Item className={styles.navbar_item}>
              <FontAwesomeIcon icon={faShoppingCart} />
              <p className={styles.icon_p}>Cart</p>
            </Navbar.Item>
          </Navbar.Container>

          <Navbar.Container align="right">
            <Navbar.Item
              className={styles.navbar_item}
              onClick={() => setIsSignUpModalShown(true)}
            >
              <FontAwesomeIcon icon={faUserCircle} />
              <p>Sign Up</p>
            </Navbar.Item>

            <Navbar.Item
              className={styles.navbar_item}
              onClick={() => setIsLogInModalShown(true)}
            >
              <FontAwesomeIcon icon={faSignIn} />
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
