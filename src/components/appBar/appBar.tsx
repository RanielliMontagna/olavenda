import { FiSun, FiMoon } from 'react-icons/fi';
import { Avatar, IconButton, Menu, MenuItem, Typography } from '@mui/material';

import { AppBarContainer, ProfileContainer } from './appBar.styles';
import { useAppBar } from './useApp';

import { FiChevronDown } from 'react-icons/fi';
import useAuth from 'store/auth/auth';

const AppBar = () => {
  const { user } = useAuth();
  const { handleChangeTheme, mode, anchorElMenu, handleCloseMenu, handleOpenMenu, handleLogout } =
    useAppBar();

  return (
    <AppBarContainer>
      <div>
        <IconButton onClick={handleChangeTheme}>{mode === 'dark' ? <FiSun /> : <FiMoon />}</IconButton>
      </div>
      <ProfileContainer
        anchorElMenu={anchorElMenu}
        onClick={(e: any) => {
          handleOpenMenu(e);
        }}
      >
        <Avatar />
        <Typography>{user?.name}</Typography>
        <FiChevronDown className="icon" color={mode === 'dark' ? '#fff' : '#000'} />
      </ProfileContainer>
      <Menu
        anchorEl={anchorElMenu}
        open={Boolean(anchorElMenu)}
        onClose={handleCloseMenu}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleLogout}>Deslogar</MenuItem>
      </Menu>
    </AppBarContainer>
  );
};

export { AppBar };
