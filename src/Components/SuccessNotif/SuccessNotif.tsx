import { AppNotification } from '../AppNotification';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

export const SuccessNotif: React.FC<{ text: string }> = ({ text }) => {
  return (
    <AppNotification color="success" icon={faCheck}>
      <p>{text}</p>
    </AppNotification>
  );
};
