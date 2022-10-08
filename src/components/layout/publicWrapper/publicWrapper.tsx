import { Outlet } from 'react-router-dom';

import useApp from 'store/app/app';
import { Loading } from 'components/loading/loading';
import { useNotification } from 'hooks/useNotification/useNotification';

const PublicWrapper = () => {
  const { loading } = useApp();

  // Notificação
  useNotification();

  return (
    <>
      {loading && <Loading />}
      <Outlet />
    </>
  );
};

export { PublicWrapper };
