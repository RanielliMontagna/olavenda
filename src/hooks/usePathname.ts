import { useLocation } from 'react-router-dom';

const usePathname = () => {
  const { pathname } = useLocation();

  return pathname?.replace('/', '');
};

export { usePathname };
