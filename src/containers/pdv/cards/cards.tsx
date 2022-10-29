import { CardsContainerExterno, CardsContainerInterno } from './cards.styles';
import { Card } from './card/card';
import { InputAdornment } from '@mui/material';
import { FiSearch } from 'react-icons/fi';
import { TextField } from 'components/textField/textField';
import { Autocomplete } from 'components/autoComplete/autoComplete';
import { useCards } from './useCards';

const Cards = () => {
  const { data } = useCards();

  return (
    <CardsContainerExterno>
      <div style={{ display: 'flex', gap: 8 }}>
        <TextField
          name="search"
          label="Pesquisar"
          variant="outlined"
          fullWidth
          placeholder="Buscar produto"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <FiSearch />
              </InputAdornment>
            ),
          }}
        />
        <Autocomplete
          name="categorias"
          variant="outlined"
          defaultValue={{
            value: -1,
            label: 'Todas',
          }}
          options={[
            {
              value: -1,
              label: 'Todas',
            },
          ]}
          style={{ width: 200 }}
        />
      </div>
      <CardsContainerInterno>
        <div>
          {data.map((value) => (
            <Card key={value.id} {...value} />
          ))}
        </div>
      </CardsContainerInterno>
    </CardsContainerExterno>
  );
};

export { Cards };
