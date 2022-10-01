import { setTheme } from 'helpers/localStorage/localStorage';
import useApp from 'store/app/app';

const useAppBar = () => {
  const { themeMode, setThemeMode } = useApp();

  const handleChangeTheme = () => {
    if (themeMode === 'dark') {
      setTheme('light');
      setThemeMode('light');
    } else {
      setTheme('dark');
      setThemeMode('dark');
    }
  };

  return {
    handleChangeTheme,
    mode: themeMode,
  };
};

export { useAppBar };
