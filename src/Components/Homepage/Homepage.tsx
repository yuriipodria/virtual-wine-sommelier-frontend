import { Container, Box, Form, Columns, Button } from 'react-bulma-components';
import homepageStyles from './Homepage.module.scss';
import headerStyles from '../Header/Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';
import { Color, Country, Grape, Strength, Type } from '../../types/Product';

export const Homepage = () => {
  const MIN_PRICE = 0;
  const MAX_PRICE = 2000;

  useEffect(() => {
    document.body.classList.add(homepageStyles.body);

    document
      .getElementById('header')
      ?.classList.remove(headerStyles.navbar_shadow);

    return () => {
      document.body.classList.remove(homepageStyles.body);

      document
        .getElementById('header')
        ?.classList.add(headerStyles.navbar_shadow);
    };
  }, []);

  return (
    <Container className={homepageStyles.container} mt={3}>
      <form>
        <Columns>
          <Columns.Column size={12} desktop={{ size: 'half' }}>
            <Form.Field>
              <Box className={homepageStyles.box}>
                <Form.Label htmlFor="country-select">Яка країна? 🌎</Form.Label>

                <Form.Control>
                  <Form.Select id="country-select">
                    <option value="">Поки не знаю / будь-що підійде</option>
                    {Object.entries(Country).map(([key, value]) => (
                      <option key={key} value={key}>
                        {value}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Control>
              </Box>
            </Form.Field>
          </Columns.Column>

          <Columns.Column size={12} desktop={{ size: 'half' }}>
            <Form.Field>
              <Box className={homepageStyles.box}>
                <Form.Label htmlFor="color-select">Який колір? 🌸</Form.Label>

                <Form.Control>
                  <Form.Select id="color-select">
                    <option value="">Поки не знаю / будь-що підійде</option>
                    {Object.entries(Color).map(([key, value]) => (
                      <option key={key} value={key}>
                        {value}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Control>
              </Box>
            </Form.Field>
          </Columns.Column>

          <Columns.Column size={12} desktop={{ size: 'one-third' }}>
            <Form.Field>
              <Box className={homepageStyles.box}>
                <Form.Label htmlFor="type-select">Як щодо типу? 🥂</Form.Label>

                <Form.Control>
                  <Form.Select id="type-select">
                    <option value="">Поки не знаю / будь-що підійде</option>
                    {Object.entries(Type).map(([key, value]) => (
                      <option key={key} value={key}>
                        {value}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Control>
              </Box>
            </Form.Field>
          </Columns.Column>

          <Columns.Column size={12} desktop={{ size: 'one-third' }}>
            <Form.Field>
              <Box className={homepageStyles.box}>
                <Form.Label htmlFor="strength-select">
                  Яка міцність? 🍷
                </Form.Label>

                <Form.Control>
                  <Form.Select id="strength-select">
                    <option value="">Поки не знаю / будь-що підійде</option>
                    {Object.entries(Strength).map(([key, value]) => (
                      <option key={key} value={key}>
                        {value}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Control>
              </Box>
            </Form.Field>
          </Columns.Column>

          <Columns.Column size={12} desktop={{ size: 'one-third' }}>
            <Form.Field>
              <Box className={homepageStyles.box}>
                <Form.Label htmlFor="grape-select">
                  Яким сортам винограду надаєш перевагу? 🍇
                </Form.Label>

                <Form.Control>
                  <Form.Select id="strength-select">
                    <option value="">Поки не знаю / будь-що підійде</option>
                    {Object.entries(Grape).map(([key, value]) => (
                      <option key={key} value={key}>
                        {value}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Control>
              </Box>
            </Form.Field>
          </Columns.Column>

          <Columns.Column size={12} desktop={{ size: 'half' }}>
            <Form.Field>
              <Box className={homepageStyles.box}>
                <Form.Label htmlFor="price-input">
                  Який твій бюджет (грн)? 💸
                </Form.Label>

                <Form.Control className={homepageStyles.price_form_control}>
                  <p>Від</p>

                  <input
                    className={homepageStyles.range_slider}
                    type="range"
                    min={MIN_PRICE}
                    max={MAX_PRICE}
                    step="1"
                  />

                  <p>До</p>

                  <input
                    className={homepageStyles.range_slider}
                    type="range"
                    min={MIN_PRICE}
                    max={MAX_PRICE}
                    step="1"
                  />
                </Form.Control>
              </Box>
            </Form.Field>
          </Columns.Column>

          <Columns.Column
            alignContent="center"
            size={12}
            desktop={{ size: 'half' }}
          >
            <Form.Field>
              <Form.Control>
                <Button
                  color="primary"
                  textSize={4}
                  className={homepageStyles.button}
                >
                  <p>Шукати</p>
                  <FontAwesomeIcon icon={faSearch} />
                </Button>
              </Form.Control>
            </Form.Field>
          </Columns.Column>
        </Columns>
      </form>
    </Container>
  );
};
