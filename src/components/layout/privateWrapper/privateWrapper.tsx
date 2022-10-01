import { Outlet } from 'react-router-dom';

import { Drawer } from 'components/drawer/drawer';
import { AppBar } from 'components/appBar/appBar';
import { PrivateWrapperContainer } from './privateWrapper.styles';
import { usePathname } from 'hooks/usePathname';

const PrivateWrapper = () => {
  const pathname = usePathname();

  if (pathname === '404') {
    return <Outlet />;
  }

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
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
