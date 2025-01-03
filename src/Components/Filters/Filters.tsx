import { Block, Button, Form, Heading } from 'react-bulma-components';
import { Checkbox } from '../Checkbox';
import styles from './Filters.module.scss';
import { Color, Country, Grape, Strength, Type } from '../../types/Product';
import { FiltersInterface } from '../../types/FiltersInterface';
import { SearchParams } from '../../types/SearchParams';

interface Props {
  selectedFilters: FiltersInterface;
  setSelectedFilters: (
    current: (value: FiltersInterface) => FiltersInterface,
  ) => void;
  setSearchWith: (params: SearchParams) => void;
}

export const Filters: React.FC<Props> = ({
  selectedFilters,
  setSelectedFilters,
  setSearchWith,
}) => {
  const handleApply = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setSearchWith({ ...selectedFilters, page: null });
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  const handleReset = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setSearchWith({
      country: [],
      color: [],
      type: [],
      strength: [],
      grape: [],
      price: [],
      query: null,
    });
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <Block className={styles.block} mb="0">
      <aside>
        <form className={styles.form}>
          <Form.Field className={styles.field} mb={5}>
            <Form.Label>
              <Heading size={5} className={styles.heading}>
                Країна
              </Heading>
            </Form.Label>

            <Form.Control>
              {Object.entries(Country).map(([key, value]) => {
                const isChecked = selectedFilters.country.includes(value);

                return (
                  <Checkbox
                    key={key}
                    labelText={value}
                    id={`${key}-checkbox`}
                    checked={isChecked}
                    onChange={() => {
                      setSelectedFilters(current => ({
                        ...current,
                        country: isChecked
                          ? current.country.filter(country => country !== value)
                          : [...current.country, value],
                      }));
                    }}
                  />
                );
              })}
            </Form.Control>
          </Form.Field>

          <Form.Field className={styles.field} mb={5}>
            <Form.Label>
              <Heading size={5} className={styles.heading}>
                Колір
              </Heading>
            </Form.Label>

            <Form.Control>
              {Object.entries(Color).map(([key, value]) => {
                const isChecked = selectedFilters.color.includes(value);

                return (
                  <Checkbox
                    key={key}
                    labelText={value}
                    id={`${key}-checkbox`}
                    checked={isChecked}
                    onChange={() =>
                      setSelectedFilters(current => ({
                        ...current,
                        color: isChecked
                          ? current.color.filter(color => color !== value)
                          : [...current.color, value],
                      }))
                    }
                  />
                );
              })}
            </Form.Control>
          </Form.Field>

          <Form.Field className={styles.field} mb={5}>
            <Form.Label>
              <Heading size={5} className={styles.heading}>
                Тип
              </Heading>
            </Form.Label>

            <Form.Control>
              {Object.entries(Type).map(([key, value]) => {
                const isChecked = selectedFilters.type.includes(value);

                return (
                  <Checkbox
                    key={key}
                    labelText={value}
                    id={`${key}-checkbox`}
                    checked={isChecked}
                    onChange={() =>
                      setSelectedFilters(current => ({
                        ...current,
                        type: isChecked
                          ? current.type.filter(type => type !== value)
                          : [...current.type, value],
                      }))
                    }
                  />
                );
              })}
            </Form.Control>
          </Form.Field>

          <Form.Field className={styles.field} mb={5}>
            <Form.Label>
              <Heading size={5} className={styles.heading}>
                Міцність
              </Heading>
            </Form.Label>

            <Form.Control>
              {Object.entries(Strength).map(([key, value]) => {
                const isChecked = selectedFilters.strength.includes(value);

                return (
                  <Checkbox
                    key={key}
                    labelText={value}
                    id={`${key}-checkbox`}
                    checked={isChecked}
                    onChange={() =>
                      setSelectedFilters(current => ({
                        ...current,
                        strength: isChecked
                          ? current.strength.filter(str => str !== value)
                          : [...current.strength, value],
                      }))
                    }
                  />
                );
              })}
            </Form.Control>
          </Form.Field>

          <Form.Field className={styles.field} mb={5}>
            <Form.Label>
              <Heading size={5} className={styles.heading}>
                Сорт винограду
              </Heading>
            </Form.Label>

            <Form.Control>
              {Object.entries(Grape).map(([key, value]) => {
                const isChecked = selectedFilters.grape.includes(value);

                return (
                  <Checkbox
                    key={key}
                    labelText={value}
                    id={`${key}-checkbox`}
                    checked={isChecked}
                    onChange={() =>
                      setSelectedFilters(current => ({
                        ...current,
                        grape: isChecked
                          ? current.grape.filter(grape => grape !== value)
                          : [...current.grape, value],
                      }))
                    }
                  />
                );
              })}
            </Form.Control>
          </Form.Field>

          <Form.Field
            className={`${styles.field} ${styles.price_form_field}`}
            mb={5}
          >
            <Form.Label>
              <Heading size={5} className={styles.heading}>
                Ціна
              </Heading>
            </Form.Label>

            <Form.Control>
              <p>Від</p>
              <Form.Input />
              <p>До</p>
              <Form.Input />
            </Form.Control>
          </Form.Field>

          <Form.Field>
            <Form.Control
              className={styles.button_group}
              renderAs={Button.Group}
              textAlign="center"
            >
              <Button color="primary" onClick={handleApply}>
                Apply
              </Button>
              <Button onClick={handleReset}>Reset</Button>
            </Form.Control>
          </Form.Field>
        </form>
      </aside>
    </Block>
  );
};
