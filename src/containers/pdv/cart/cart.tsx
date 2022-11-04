import { Grid, Typography } from '@mui/material';
import { usePdvContext } from '../pdv.context';

import { CartItemsContainer } from '../pdv.styles';
import { GridProduct, GridRemoveProduct } from './cart.styles';

import { IoClose } from 'react-icons/io5';
import { formatToReal } from 'utils/formatToReal';

const Cart = () => {
  const { produtosMethods } = usePdvContext();

  return (
    <CartItemsContainer style={{ padding: 16, display: 'flex', flexDirection: 'column', gap: 8 }}>
      {produtosMethods.fields.map((item, index) => {
        return (
          <GridProduct justifyContent="space-between" key={item.id}>
            <Grid item>
              <Grid container gap={1}>
                <Grid item style={{ display: 'flex', alignItems: 'center' }}>
                  <Typography variant="body1">{item.quantidade}</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1">{item.nome}</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container gap={4}>
                <Grid item>
                  <Typography variant="subtitle1">{formatToReal(item.valor)}</Typography>
                </Grid>
                <GridRemoveProduct>
                  <IoClose size={21} onClick={() => produtosMethods.remove(index)} />
                </GridRemoveProduct>
              </Grid>
            </Grid>
          </GridProduct>
        );
      })}
    </CartItemsContainer>
  );
};

export { Cart };
