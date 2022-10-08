import { setLocalEmail } from 'helpers/localStorage/localStorage';

import { cookieLogin, login } from 'service/authentication/authentication';
import type { ILogin } from 'service/authentication/authentication.types';
import useApp from 'store/app/app';
import useAuth from 'store/auth/auth';

const useLogin = () => {
  const { setToken } = useAuth();
  const { setLoading, setNotification, handleError } = useApp();

  const onSubmit = async (values: ILogin) => {
    setLoading(true);

    try {
      await cookieLogin();

      const res = await login(values);

      if (res.data) {
        if (res.data?.Sucesso) {
          setLocalEmail(values.email);
          setToken(res.data.Token, true);

          setNotification({ message: 'Login realizado com sucesso!', options: { variant: 'success' } });
        } else {
          setNotification({ message: res.data?.Mensagem, options: { variant: 'error' } });
        }
      }
      setLoading(false);
    } catch (err) {
      handleError(err);
    }
  };

  return {
    onSubmit,
  };
};

export { useLogin };
