import { Container, Box, Form, Columns, Button } from 'react-bulma-components';
import homepageStyles from './Homepage.module.scss';
import headerStyles from '../Header/Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { Color, Country, Grape, Strength, Type } from '../../types/Product';
import { FiltersInterface } from '../../types/FiltersInterface';
import { Link } from 'react-router-dom';
import { getSearchWith } from '../../utils/getSearchWith';
import { SearchParams } from '../../types/SearchParams';

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

  const [filters, setFilters] = useState<FiltersInterface>({
    country: [],
    color: [],
    type: [],
    strength: [],
    grape: [],
    priceFrom: MIN_PRICE,
    priceTo: MAX_PRICE,
    query: null,
  });

  return (
    <Container className={homepageStyles.container} mt={3}>
      <form>
        <Columns>
          <Columns.Column size={12}>
            <Form.Field>
              <Box
                className={`${homepageStyles.box} ${homepageStyles.query_box}`}
              >
                <Form.Label htmlFor="query-input" textAlign="center">
                  Пошук за назвою 🔍
                </Form.Label>

                <Form.Control className={homepageStyles.query_control}>
                  <Form.Input
                    id="query-input"
                    textAlign="center"
                    onChange={e => {
                      setFilters(current => {
                        const newState = { ...current };

                        newState.query =
                          e.target.value.trim().toLowerCase() || null;

                        return newState;
                      });
                    }}
                  />
                </Form.Control>
              </Box>
            </Form.Field>
          </Columns.Column>

          <Columns.Column size={12} desktop={{ size: 'half' }}>
            <Form.Field>
              <Box className={homepageStyles.box}>
                <Form.Label htmlFor="country-select">Яка країна? 🌎</Form.Label>

                <Form.Control>
                  <Form.Select
                    id="country-select"
                    onChange={e => {
                      setFilters(current => ({
                        ...current,
                        country: [e.target.value] as Country[],
                      }));
                    }}
                  >
                    <option value="">Поки не знаю / будь-що підійде</option>
                    {Object.entries(Country).map(([key, value]) => (
                      <option key={key} value={value}>
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
                  <Form.Select
                    id="color-select"
                    onChange={e => {
                      setFilters(current => ({
                        ...current,
                        color: [e.target.value] as Color[],
                      }));
                    }}
                  >
                    <option value="">Поки не знаю / будь-що підійде</option>
                    {Object.entries(Color).map(([key, value]) => (
                      <option key={key} value={value}>
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
                  <Form.Select
                    id="type-select"
                    onChange={e => {
                      setFilters(current => ({
                        ...current,
                        type: [e.target.value] as Type[],
                      }));
                    }}
                  >
                    <option value="">Поки не знаю / будь-що підійде</option>
                    {Object.entries(Type).map(([key, value]) => (
                      <option key={key} value={value}>
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
                  <Form.Select
                    id="strength-select"
                    onChange={e => {
                      setFilters(current => ({
                        ...current,
                        strength: [e.target.value] as Strength[],
                      }));
                    }}
                  >
                    <option value="">Поки не знаю / будь-що підійде</option>
                    {Object.entries(Strength).map(([key, value]) => (
                      <option key={key} value={value}>
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
                  <Form.Select
                    id="grape-select"
                    onChange={e => {
                      setFilters(current => ({
                        ...current,
                        grape: [e.target.value] as Grape[],
                      }));
                    }}
                  >
                    <option value="">Поки не знаю / будь-що підійде</option>
                    {Object.entries(Grape).map(([key, value]) => (
                      <option key={key} value={value}>
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
                  <p>
                    Від{' '}
                    <span className={homepageStyles.price}>
                      {filters.priceFrom || MIN_PRICE} грн
                    </span>{' '}
                  </p>

                  <input
                    className={homepageStyles.range_slider}
                    type="range"
                    min={MIN_PRICE}
                    max={MAX_PRICE}
                    step="1"
                    value={filters.priceFrom || MIN_PRICE}
                    onChange={e =>
                      setFilters(current => {
                        const newState = { ...current };

                        newState.priceFrom = +e.target.value;

                        return newState;
                      })
                    }
                  />

                  <p>
                    До{' '}
                    <span className={homepageStyles.price}>
                      {filters.priceTo || MAX_PRICE} грн
                    </span>{' '}
                  </p>

                  <input
                    className={homepageStyles.range_slider}
                    type="range"
                    min={MIN_PRICE}
                    max={MAX_PRICE}
                    step="1"
                    value={filters.priceTo || MAX_PRICE}
                    onChange={e =>
                      setFilters(current => {
                        const newState = { ...current };

                        newState.priceTo = +e.target.value;

                        return newState;
                      })
                    }
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
                  renderAs={Link}
                  to={{
                    pathname: '/catalog',
                    search: getSearchWith(filters as unknown as SearchParams),
                  }}
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
