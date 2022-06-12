import { createContext, useState, useEffect } from 'react';


interface Notification {
  title: string; message: string; status: string;
}

const NotificationContext = createContext<{
  notification: Notification | null, // { title, message, status }
  showNotification: (notificationDatas: Notification) => void,
  hideNotification: () => void,
}>({
  notification: null, // { title, message, status }
  showNotification: (notificationDatas: Notification) => { },
  hideNotification: () => { },
});

export const NotificationContextProvider = (props: any) => {
  const [activeNotification, setActiveNotification] = useState<Notification | null>(null);

  useEffect(() => {
    if (
      activeNotification &&
      (activeNotification.status === 'success' ||
        activeNotification.status === 'error')
    ) {
      const timer = setTimeout(() => {
        setActiveNotification(null);
      }, 3000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [activeNotification]);

  function showNotificationHandler(notificationData: Notification) {
    setActiveNotification(notificationData);
  }

  function hideNotificationHandler() {
    setActiveNotification(null);
  }

  const context = {
    notification: activeNotification,
    showNotification: showNotificationHandler,
    hideNotification: hideNotificationHandler,
  };

  return (
    <NotificationContext.Provider value={context}>
      {props.children}
    </NotificationContext.Provider>
  );
}

export default NotificationContext;
