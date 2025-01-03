import { FiltersInterface } from '../types/FiltersInterface';
import { Grape, Product } from '../types/Product';

const MIN_PRICE = 0;
const MAX_PRICE = 2000;

export const filterProducts = (
  products: Product[],
  filters: FiltersInterface,
) => {
  return products
    .filter(
      item =>
        filters.country.length === 0 || filters.country.includes(item.country),
    )
    .filter(
      item => filters.color.length === 0 || filters.color.includes(item.color),
    )
    .filter(
      item => filters.type.length === 0 || filters.type.includes(item.type),
    )
    .filter(
      item =>
        filters.strength.length === 0 ||
        filters.strength.includes(item.strength),
    )
    .filter(item => {
      const itemGrapes = item.grape.split(', ') as Grape[];

      return (
        filters.grape.length === 0 ||
        itemGrapes.some(grape => filters.grape.includes(grape))
      );
    })
    .filter(
      item =>
        item.price >= (filters.price[0] || MIN_PRICE) &&
        item.price <= (filters.price[1] || MAX_PRICE),
    )
    .filter(
      item =>
        !filters.query ||
        item.name
          .trim()
          .toLowerCase()
          .includes(filters.query.trim().toLowerCase()),
    );
};
