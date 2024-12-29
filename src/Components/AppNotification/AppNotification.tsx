import { Notification } from 'react-bulma-components';
import styles from './AppNotification.module.scss';
import { Color } from 'react-bulma-components/src/components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

export const AppNotification: React.FC<{
  children: React.ReactNode;
  color: Color;
  icon: IconProp;
}> = ({ children, color, icon }) => {
  return (
    <Notification className={styles.notification} color={color} mb="0">
      <FontAwesomeIcon size="lg" icon={icon}></FontAwesomeIcon>
      {children}
    </Notification>
  );
};
