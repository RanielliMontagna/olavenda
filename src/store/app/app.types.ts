export interface AppStore {
  loading: boolean;
  themeMode: 'light' | 'dark';
  setThemeMode: (theme: 'light' | 'dark') => void;
  setLoading: (loading: boolean) => void;
  handleError: (error: unknown) => void;
}
