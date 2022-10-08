import { BrowserRouter, Routes as RoutesV6, Route, Navigate } from 'react-router-dom';

import { PublicWrapper } from 'components/layout/publicWrapper/publicWrapper';
import { PrivateWrapper } from 'components/layout/privateWrapper/privateWrapper';

import { Pdv } from 'containers/pdv/pdv';
import { Produtos } from 'containers/produtos/produtos';
import { Clientes } from 'containers/clientes/clientes';
import { Vendas } from 'containers/vendas/vendas';

import { Login } from 'containers/login/login';
import { NotFound } from 'containers/404/404';

import useAuth from 'store/auth/auth';

const Routes = () => {
  const { isAuthenticated } = useAuth();

  // const isAuthenticated = true;

  return (
    <BrowserRouter>
      <RoutesV6>
        {isAuthenticated ? (
          <Route path="/" element={<PrivateWrapper />}>
            <Route path="/pdv" element={<Pdv />} />
            <Route path="/produtos" element={<Produtos />} />
            <Route path="/clientes" element={<Clientes />} />
            <Route path="/vendas" element={<Vendas />} />
            <Route path="/404" element={<NotFound />} />

            <Route path="/" element={<Navigate to="/pdv" />} />
            <Route path="/login" element={<Navigate to="/pdv" />} />
            <Route path="*" element={<Navigate to="/404" />} />
          </Route>
        ) : (
          <Route path="/" element={<PublicWrapper />}>
            <Route path="/login" element={<Login />} />

            <Route path="*" element={<Navigate to="/login" />} />
          </Route>
        )}
      </RoutesV6>
    </BrowserRouter>
  );
};

export { Routes };
