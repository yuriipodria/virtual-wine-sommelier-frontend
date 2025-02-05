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
  faSignOut,
  faUserCircle,
} from '@fortawesome/free-solid-svg-icons';
import { checkLoggedIn, removeAuthToken } from '../../utils/authTokenCookie';
import { logoutUser } from '../../api/auth';

export const Header = () => {
  const [isSignUpModalShown, setIsSignUpModalShown] = useState(false);
  const [isLogInModalShown, setIsLogInModalShown] = useState(false);
  const [isMenuShown, setIsMenuShown] = useState(false);

  const hideMenu = useCallback(() => setIsMenuShown(false), []);

  const handleLogOut = async () => {
    await logoutUser();
    removeAuthToken();
    window.location.reload();
  };

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
          <Navbar.Container className={styles.navbar_container}>
            <Navbar.Item
              className={styles.navbar_item}
              renderAs={Link}
              to="/"
              onClick={hideMenu}
            >
              <FontAwesomeIcon icon={faHome} />
              <p className={styles.icon_p}>Головна</p>
            </Navbar.Item>

            <Navbar.Item
              className={styles.navbar_item}
              renderAs={Link}
              to="/catalog"
              onClick={hideMenu}
            >
              <FontAwesomeIcon icon={faList} />
              <p className={styles.icon_p}>Каталог</p>
            </Navbar.Item>

            {checkLoggedIn() && (
              <Navbar.Item
                className={styles.navbar_item}
                renderAs={Link}
                to="/cart"
                onClick={hideMenu}
              >
                <FontAwesomeIcon icon={faShoppingCart} />
                <p className={styles.icon_p}>Кошик</p>
              </Navbar.Item>
            )}
          </Navbar.Container>

          <Navbar.Container align="right" className={styles.navbar_container}>
            {checkLoggedIn() ? (
              <Navbar.Item
                className={styles.navbar_item}
                onClick={handleLogOut}
              >
                <FontAwesomeIcon icon={faSignOut} />
                <p className={styles.icon_p_auth}>Вийти</p>
              </Navbar.Item>
            ) : (
              <>
                <Navbar.Item
                  className={styles.navbar_item}
                  onClick={() => setIsSignUpModalShown(true)}
                >
                  <FontAwesomeIcon icon={faUserCircle} />
                  <p className={styles.icon_p_auth}>Реєстрація</p>
                </Navbar.Item>

                <Navbar.Item
                  className={styles.navbar_item}
                  onClick={() => setIsLogInModalShown(true)}
                >
                  <FontAwesomeIcon icon={faSignIn} />
                  <p className={styles.icon_p_auth}>Вхід</p>
                </Navbar.Item>
              </>
            )}
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
