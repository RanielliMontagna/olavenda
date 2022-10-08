import axios from 'axios';
import useAuth from 'store/auth/auth';

const makeHeaders = () => {
  const token = useAuth.getState().token;

  if (token) {
    return {
      Accept: 'application/json',
      'Content-type': 'application/json',
      Authorization: `Bearer ${token}` || '',
    };
  } else {
    useAuth.destroy();
  }
};

const api = axios.create({ baseURL: `${process.env.REACT_APP_API_URL}/api` });
const apiWithoutAuth = axios.create({ baseURL: process.env.REACT_APP_API_URL });

export { api, apiWithoutAuth, makeHeaders };
