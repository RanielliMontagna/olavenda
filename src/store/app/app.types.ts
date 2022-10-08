import { OptionsObject, SnackbarMessage } from 'notistack';

export type Notification = {
  message: SnackbarMessage;
  options?: OptionsObject;
} | null;

export interface AppStore {
  loading: boolean;
  themeMode: 'light' | 'dark';
  notification: Notification;

  setThemeMode: (theme: 'light' | 'dark') => void;
  setNotification: (notification: Notification) => void;
  setLoading: (loading: boolean) => void;
  handleError: (error: unknown) => void;
}
