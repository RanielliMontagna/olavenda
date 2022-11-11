import { CardsContainerExterno, CardsContainerInterno } from './cards.styles';
import { Card } from './card/card';
import { InputAdornment } from '@mui/material';
import { FiSearch } from 'react-icons/fi';
import { TextField } from 'components/textField/textField';
import { Autocomplete } from 'components/autoComplete/autoComplete';
import { usePdvContext } from '../pdv.context';
import { useFormContext } from 'react-hook-form';
import { useCallback } from 'react';

const Cards = () => {
  const { produtos, handleBuscarProdutos, categorias } = usePdvContext();
  const { watch } = useFormContext();

  const cards = useCallback(() => {
    if (watch()?.categorias?.value !== -1) {
      return produtos
        ?.map((value) => <Card key={value.id} {...value} />)
        .filter((value) => {
          return value.props.categoria === watch()?.categorias?.label;
        });
    } else {
      return produtos?.map((value) => <Card key={value.id} {...value} />);
    }
  }, [produtos, watch]);

  return (
    <CardsContainerExterno>
      <div style={{ display: 'flex', gap: 8 }}>
        <TextField
          name="search"
          label="Pesquisar"
          onInputChange={handleBuscarProdutos}
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
            ...categorias.map((categoria) => ({
              value: categoria.id,
              label: categoria.nome,
            })),
          ]}
          style={{ width: 200 }}
        />
      </div>
      <CardsContainerInterno>
        <div>{cards()}</div>
      </CardsContainerInterno>
    </CardsContainerExterno>
  );
};

export { Cards };
