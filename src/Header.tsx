import { Navbar, Button, Heading } from 'react-bulma-components';
import styles from './Header.module.scss';

export const Header = () => (
  <Navbar className={styles.navbar} color="primary">
    <Navbar.Brand>
      <Navbar.Item>
        <Heading size={3} className="has-text-white">
          wine
        </Heading>
      </Navbar.Item>
    </Navbar.Brand>

    <Navbar.Burger />

    <Navbar.Menu>
      <Navbar.Container>
        <Navbar.Item>Home</Navbar.Item>

        <Navbar.Item>Catalog</Navbar.Item>

        <Navbar.Item>Cart</Navbar.Item>
      </Navbar.Container>

      <Navbar.Container align="right">
        <Navbar.Item className={styles.no_hover}>
          <Button color="light">Sign up</Button>
        </Navbar.Item>

        <Navbar.Item className={styles.no_hover}>
          <Button color="light">Log in</Button>
        </Navbar.Item>
      </Navbar.Container>
    </Navbar.Menu>
  </Navbar>
);
