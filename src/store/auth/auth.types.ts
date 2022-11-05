export type Token = string | null;

export interface IUser {
  id: number;
  name: string;
  email: string;
}

export interface IProfile {
  name: string;
}

export interface AuthStates {
  isAuthenticated: boolean;
  token: Token;
  user: IUser | null;
}
export interface AuthStore extends AuthStates {
  setToken: (token: Token, remember?: boolean) => void;
  clearStore: () => void;
  setUser: (user: IUser) => void;
}
