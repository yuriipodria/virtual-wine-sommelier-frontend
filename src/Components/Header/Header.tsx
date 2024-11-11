import { Navbar, Heading } from 'react-bulma-components';
import cn from 'classnames';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import { SignUpModal } from '../SignUpModal';
import { useCallback, useState } from 'react';
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
  const [isMenuShown, setIsMenuShown] = useState(false);

  const hideMenu = useCallback(() => setIsMenuShown(false), []);

  return (
    <>
      <Navbar
        className={`${styles.navbar_shadow} ${styles.navbar}`}
        color="primary"
      >
        <Navbar.Brand>
          <Navbar.Item renderAs={Link} to="/" onClick={hideMenu}>
            <Heading size={3} textColor="white">
              wine
            </Heading>
          </Navbar.Item>

          <Navbar.Burger
            textColor="white"
            onClick={() => setIsMenuShown(current => !current)}
          />
        </Navbar.Brand>

        <Navbar.Menu className={cn({ 'is-active': isMenuShown })}>
          <Navbar.Container>
            <Navbar.Item
              className={styles.navbar_item}
              renderAs={Link}
              to="/"
              onClick={hideMenu}
            >
              <FontAwesomeIcon icon={faHome} />
              <p className={styles.icon_p}>Home</p>
            </Navbar.Item>

            <Navbar.Item
              className={styles.navbar_item}
              renderAs={Link}
              to="/catalog"
              onClick={hideMenu}
            >
              <FontAwesomeIcon icon={faList} />
              <p className={styles.icon_p}>Catalog</p>
            </Navbar.Item>

            <Navbar.Item className={styles.navbar_item} onClick={hideMenu}>
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
              <p className={styles.icon_p_auth}>Sign Up</p>
            </Navbar.Item>

            <Navbar.Item
              className={styles.navbar_item}
              onClick={() => setIsLogInModalShown(true)}
            >
              <FontAwesomeIcon icon={faSignIn} />
              <p className={styles.icon_p_auth}>Log In</p>
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
