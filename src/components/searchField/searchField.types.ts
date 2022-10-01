import { DebouncedFunc } from 'lodash';

export interface ISearchField {
  placeholder: string;
  handleSearch: DebouncedFunc<(term: string) => Promise<void>>;
  id?: string;
}
