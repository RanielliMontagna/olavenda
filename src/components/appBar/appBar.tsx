import { AppBarContainer } from './appBar.styles';

import { FiSun, FiMoon } from 'react-icons/fi';
import { IconButton } from '@mui/material';
import { useAppBar } from './useApp';

const AppBar = () => {
  const { handleChangeTheme, mode } = useAppBar();

  return (
    <AppBarContainer>
      <div>
        <IconButton onClick={handleChangeTheme}>{mode === 'dark' ? <FiSun /> : <FiMoon />}</IconButton>
      </div>
      <div>Implementar logout</div>
    </AppBarContainer>
  );
};

export { AppBar };
