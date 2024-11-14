type SearchParam = string | number;

export interface SearchParams {
  [key: string]: SearchParam[] | SearchParam | null;
}
