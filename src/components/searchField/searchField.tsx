import type { ISearchField } from './searchField.types';
import { TextFieldStyled } from './searchField.styles';

import { HiOutlineSearch } from 'react-icons/hi';

export const SearchField = ({ placeholder, handleSearch, id }: ISearchField) => {
  return (
    <TextFieldStyled
      size="small"
      id={id ?? 'search'}
      variant="outlined"
      onChange={(e) => handleSearch(e.target.value)}
      placeholder={placeholder}
      InputProps={{
        startAdornment: (
          <div style={{ display: 'flex', alignItems: 'center', width: '32px' }}>
            <HiOutlineSearch size={18} />
          </div>
        ),
        onFocus: (e: React.FocusEvent<HTMLInputElement>) => e.target.select(),
      }}
    />
  );
};
