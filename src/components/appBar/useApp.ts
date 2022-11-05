import { useState, useCallback, useEffect } from 'react';

import { setTheme } from 'helpers/localStorage/localStorage';
import useApp from 'store/app/app';
import useAuth from 'store/auth/auth';
import { dadosUsuario } from 'service/user/user';

const useAppBar = () => {
  const { clearStore, setUser } = useAuth();
  const { themeMode, setThemeMode, handleError } = useApp();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleOpenMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleChangeTheme = () => {
    if (themeMode === 'dark') {
      setTheme('light');
      setThemeMode('light');
    } else {
      setTheme('dark');
      setThemeMode('dark');
    }
  };

  const handleLogout = () => {
    clearStore();
    handleCloseMenu();
  };

  const buscarUser = useCallback(async () => {
    try {
      const response = await dadosUsuario();

      setUser({
        id: response.data.id,
        name: response.data.name,
        email: response.data.email,
      });
    } catch (error) {
      handleError(error);
    }
  }, [handleError, setUser]);

  useEffect(() => {
    buscarUser();
  }, [buscarUser]);

  return {
    handleChangeTheme,
    mode: themeMode,

    anchorElMenu: anchorEl,
    handleOpenMenu,
    handleCloseMenu,

    handleLogout,
  };
};

export { useAppBar };
