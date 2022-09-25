import { BrowserRouter, Routes as RoutesV6, Route, Navigate } from 'react-router-dom';

import { PublicWrapper } from 'components/layout/publicWrapper';
import { PrivateWrapper } from 'components/layout/privateWrapper';

import { Pdv } from 'containers/pdv/pdv';
import { Produtos } from 'containers/produtos/produtos';
import { Clientes } from 'containers/clientes/clientes';
import { Login } from 'containers/login/login';
import { NotFound } from 'containers/404/404';

const Routes = () => {
  const _isAuthenticated = false;

  return (
    <BrowserRouter>
      <RoutesV6>
        {_isAuthenticated ? (
          <Route path="/" element={<PrivateWrapper />}>
            <Route path="/pdv" element={<Pdv />} />
            <Route path="/produtos" element={<Produtos />} />
            <Route path="/clientes" element={<Clientes />} />
            <Route path="/404" element={<NotFound />} />

            <Route path="/" element={<Navigate to="/pdv" />} />
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
