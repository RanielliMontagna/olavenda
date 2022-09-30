export interface AppStore {
  loading: boolean;
  setLoading: (loading: boolean) => void;
  handleError: (error: unknown) => void;
}
