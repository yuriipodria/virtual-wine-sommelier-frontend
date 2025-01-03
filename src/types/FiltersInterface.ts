import { Color, Country, Grape, Strength, Type } from './Product';

export interface FiltersInterface {
  country: Country[];
  color: Color[];
  type: Type[];
  strength: Strength[];
  grape: Grape[];
  price: number[];
  query: string | null;
}
