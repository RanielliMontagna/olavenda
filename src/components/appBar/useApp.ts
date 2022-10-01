import { useState } from 'react';

import { setTheme } from 'helpers/localStorage/localStorage';
import useApp from 'store/app/app';

const useAppBar = () => {
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
    //TODO: implement logout

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
