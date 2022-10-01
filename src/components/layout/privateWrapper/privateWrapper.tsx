import { Outlet } from 'react-router-dom';

import { PrivateWrapperContainer } from './privateWrapper.styles';

import { Drawer } from 'components/drawer/drawer';
import { AppBar } from 'components/appBar/appBar';
import { Loading } from 'components/loading/loading';

import { usePathname } from 'hooks/usePathname';
import useApp from 'store/app/app';

const PrivateWrapper = () => {
  const pathname = usePathname();
  const { loading } = useApp();

  if (pathname === '404') {
    return <Outlet />;
  }

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
      {loading && <Loading />}
      <Drawer />
      <PrivateWrapperContainer>
        <AppBar />
        <div style={{ overflow: 'auto', height: '100%' }}>
          <Outlet />
        </div>
      </PrivateWrapperContainer>
    </div>
  );
};

export { PrivateWrapper };
