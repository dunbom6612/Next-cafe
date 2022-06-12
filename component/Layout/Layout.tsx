import { Fragment, useContext } from 'react';

import { Footer } from '../HomePage';
import NotificationContext from '../../common/context/NotificationContext';
import Notification from '../notification/notification';

function Layout(props: any) {
  const notificationCtx = useContext(NotificationContext);

  const activeNotification = notificationCtx.notification;

  return (
    <Fragment>
      <main>{props.children}</main>
      {activeNotification && (
        <Notification
          title={activeNotification.title}
          message={activeNotification.message}
          status={activeNotification.status}
        />
      )}
    </Fragment>
  );
}

export default Layout;
