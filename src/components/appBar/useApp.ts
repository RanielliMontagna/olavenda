import { useState } from 'react';

import { setTheme } from 'helpers/localStorage/localStorage';
import useApp from 'store/app/app';
import useAuth from 'store/auth/auth';

const useAppBar = () => {
  const { clearStore } = useAuth();
  const { themeMode, setThemeMode } = useApp();

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
