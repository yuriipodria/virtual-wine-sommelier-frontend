import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { AppNotification } from '../AppNotification';

export const WarningNotif: React.FC<{ text: string }> = ({ text }) => {
  return (
    <AppNotification color="primary" icon={faExclamationTriangle}>
      <p>{text}</p>
    </AppNotification>
  );
};
