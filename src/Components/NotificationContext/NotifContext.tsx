import React, { createContext, useContext, useState } from 'react';
import { SuccessNotif } from '../SuccessNotif';
import { WarningNotif } from '../WarningNotif/WarningNotif';

type NotificationKeys = 'warningNotif' | 'successNotif';

type NotificationsVisible = {
  [key in NotificationKeys]: boolean;
};

interface NotifContextType {
  showNotification: (key: NotificationKeys, text: string) => void;
}

export const NotifContext = createContext<NotifContextType | undefined>(
  undefined,
);

export const useNotification = () => {
  const context = useContext(NotifContext);

  if (!context) {
    throw new Error('useNotification must be used within a NotifProvider');
  }

  return context;
};

export const NotifProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [visible, setVisible] = useState<NotificationsVisible>({
    warningNotif: false,
    successNotif: false,
  });

  const [message, setMessage] = useState('');

  const closeNotification = (key: NotificationKeys) => {
    setVisible(prev => ({ ...prev, [key]: false }));
  };

  const showNotification = (key: NotificationKeys, text: string) => {
    setVisible(prev => ({ ...prev, [key]: true }));
    setMessage(text);

    setTimeout(() => {
      closeNotification(key);
    }, 5000);
  };

  return (
    <NotifContext.Provider value={{ showNotification }}>
      {visible.warningNotif && <WarningNotif text={message} />}
      {visible.successNotif && <SuccessNotif text={message} />}
      {children}
    </NotifContext.Provider>
  );
};
