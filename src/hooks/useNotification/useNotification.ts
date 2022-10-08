import { useSnackbar } from 'notistack';
import useApp from 'store/app/app';

const useNotification = () => {
  const { enqueueSnackbar } = useSnackbar();
  const { notification, setNotification } = useApp();

  if (notification != null) {
    enqueueSnackbar(notification.message, notification.options);
    setNotification(null);
  }
};

export { useNotification };
