import { Navigate, Outlet } from 'react-router-dom';
import { useNotification } from '../NotificationContext';
import { checkLoggedIn } from '../../utils/authTokenCookie';

export const RequireAuth = () => {
  const { showNotification } = useNotification();

  if (!checkLoggedIn()) {
    showNotification('warningNotif', 'You must be logged in for this action');

    return <Navigate to="/" />;
  }

  return <Outlet />;
};
