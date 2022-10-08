import { useForm } from 'react-hook-form';
import { Button, Grid, TextField, Typography } from '@mui/material';

import type { ILogin } from 'service/authentication/authentication.types';

import * as styled from './login.styles';
import { useLogin } from './useLogin';

const Login = () => {
  const { onSubmit } = useLogin();
  const { register, handleSubmit } = useForm<ILogin>();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div style={{ display: 'flex', overflow: 'hidden' }}>
        <styled.DivLogin>
          <Grid container spacing={2} padding={4}>
            <Grid
              item
              xs={12}
              display="flex"
              justifyContent="center"
              flexDirection="column"
              alignItems="center"
              gap={1}
            >
              <img src="/assets/logo/logo192.png" alt="logo" style={{ width: 100 }} />
              <Typography variant="h4">Olá Venda</Typography>
              <Typography variant="body1">Efetue o login para acessar o sistema</Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                {...register('email', {
                  required: {
                    value: true,
                    message: 'Campo obrigatório',
                  },
                })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Senha"
                variant="outlined"
                type="password"
                fullWidth
                {...register('senha', {
                  required: {
                    value: true,
                    message: 'Campo obrigatório',
                  },
                })}
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" size="large" type="submit" fullWidth>
                Entrar
              </Button>
            </Grid>
          </Grid>
        </styled.DivLogin>

        <styled.DivLayout>
          <styled.DivIlustracao>
            <img src="./assets/svgs/welcome.svg" alt="loginIllustration"></img>
          </styled.DivIlustracao>
          <h1>Seja bem vindo!</h1>
          <h2>Faça vendas de forma simples e rápida, com o melhor sistema de gestão de vendas.</h2>
        </styled.DivLayout>
      </div>
    </form>
  );
};

export { Login };
