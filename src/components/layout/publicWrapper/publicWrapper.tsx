import { Outlet } from 'react-router-dom';

import useApp from 'store/app/app';
import { Loading } from 'components/loading/loading';

const PublicWrapper = () => {
  const { loading } = useApp();

  return (
    <>
      {loading && <Loading />}
      <Outlet />
    </>
  );
};

export { PublicWrapper };
