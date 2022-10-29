import { center } from 'styles/shared.styles';
import { ButtonDiv, CartContainer, CartItems, CartResume, Paper } from './pdv.styles';

import { useForm } from 'react-hook-form';
import { Button, Grid, Tooltip, Typography, useTheme } from '@mui/material';
import { FiShoppingCart, FiTrash } from 'react-icons/fi';

import { Form } from 'components/form/form';
import { PageHeader } from 'components/pageHeader/pageHeader';
import { Cards } from './cards/cards';

const Pdv = () => {
  const methods = useForm();
  const { palette } = useTheme();

  return (
    <Form {...methods} onSubmit={() => {}}>
      <form>
        <Grid container padding={2} gap={2}>
          <PageHeader title="Ponto de venda" />
          <Paper>
            <Cards />
            <CartContainer>
              <CartItems />
              <CartResume>
                <div style={{ ...center, width: 35 }}>
                  <FiShoppingCart size={15} color={palette.text.primary} />
                </div>
                <div>
                  <Typography variant="h6" fontWeight="bold">
                    R$ 0,00
                  </Typography>
                </div>
                <Tooltip title={<Typography>Limpar carrinho</Typography>} placement="left" arrow>
                  <ButtonDiv>
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

export { Pdv };
