import { center } from 'styles/shared.styles';
import { ButtonDiv, CartContainer, CartResume, Paper } from './pdv.styles';

import { Button, Grid, Tooltip, Typography, useTheme } from '@mui/material';
import { FiShoppingCart, FiTrash } from 'react-icons/fi';

import { Form } from 'components/form/form';
import { PageHeader } from 'components/pageHeader/pageHeader';
import { Cards } from './cards/cards';
import { Cart } from './cart/cart';
import { PdvProvider, usePdvContext } from './pdv.context';
import { useMemo } from 'react';
import { formatToReal } from 'utils/formatToReal';

const Pdv = () => {
  const { methods, produtosMethods } = usePdvContext();
  const { palette } = useTheme();

  const total = useMemo(() => {
    return produtosMethods.fields.reduce((acc, item) => {
      return acc + item.valor;
    }, 0);
  }, [produtosMethods.fields]);

  return (
    <Form {...methods} onSubmit={() => {}}>
      <form>
        <Grid container padding={2} gap={2}>
          <PageHeader title="Ponto de venda" />
          <Paper>
            <Cards />
            <CartContainer>
              <Cart />
              <CartResume>
                <div style={{ ...center, width: 35 }}>
                  <FiShoppingCart size={15} color={palette.text.primary} />
                </div>
                <div>
                  <Typography variant="h6" fontWeight="bold">
                    {formatToReal(total)}
                  </Typography>
                </div>
                <Tooltip title={<Typography>Limpar carrinho</Typography>} placement="left" arrow>
                  <ButtonDiv
                    onClick={() => produtosMethods.remove(produtosMethods.fields.map((_, index) => index))}
                  >
                    <FiTrash size={15} color={palette.text.primary} />
                  </ButtonDiv>
                </Tooltip>
              </CartResume>
              <Button size="large">Pagar</Button>
            </CartContainer>
          </Paper>
        </Grid>
      </form>
    </Form>
  );
};

const PdvWrapper = () => {
  return (
    <PdvProvider>
      <Pdv />
    </PdvProvider>
  );
};

export default PdvWrapper;
