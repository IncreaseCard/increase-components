import React, { useState, useEffect } from 'react';
import { storiesOf } from '@storybook/react';
import { NotificationsService } from './NotificationsService';

import ApplicationHeader from './ApplicationHeader';

const user = {
  userName: 'Juan Pérez',
  activeProducts: {
    argentina: ['card', 'conciliation'],
    ecuador: ['card'],
    dominicana: []
  }
};

function ApplicationHeaderWithNotifications() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/').then((response) => {
      response.json().then((data) => setNotifications(data.notifications));
    });
  }, []);

  useEffect(() => {
    const notificationsService = new NotificationsService({ email: 'pepito@increasecard.com' });
    notificationsService.initializeConnection();
    notificationsService.onNotification((response) => {
      setNotifications((prevNotifications) => {
        const notifArray = prevNotifications.slice();
        notifArray.unshift(response);
        return notifArray;
      });
    });
  }, []);
  return (
    <div style={{ width: '1000px' }}>
      <ApplicationHeader
        activeProducts={user.activeProducts}
        country="argentina"
        currentProduct="card"
        userName={user.userName}
        notifications={notifications}
        />
    </div>
  )
}

storiesOf('ApplicationHeader', module)
  .add('in platform ecuador', () => (
    <div style={{ width: '1000px' }}>
      <ApplicationHeader
        activeProducts={user.activeProducts}
        country="ecuador"
        currentProduct=""
        userName={user.userName}
      />
    </div>
  ))
  .add('in platform argentina', () => (
    <div style={{ width: '1000px' }}>
      <ApplicationHeader
        activeProducts={user.activeProducts}
        country="argentina"
        currentProduct=""
        userName={user.userName}
      />
    </div>
  ))
  .add('in platform dominicana (no products)', () => (
    <div style={{ width: '1000px' }}>
      <ApplicationHeader
        activeProducts={user.activeProducts}
        country="dominicana"
        currentProduct=""
        userName={user.userName}
      />
    </div>
  ))
  .add('in card argentina with notifications', () => {
    return <ApplicationHeaderWithNotifications/>;
  })
  .add('in card argentina', () => (
    <div style={{ width: '1000px' }}>
      <ApplicationHeader
        activeProducts={user.activeProducts}
        country="argentina"
        currentProduct="card"
        userName={user.userName}
      />
    </div>
  ))
  .add('in conciliation argentina', () => (
    <div style={{ width: '1000px' }}>
      <ApplicationHeader
        activeProducts={user.activeProducts}
        country="argentina"
        currentProduct="conciliation"
        userName={user.userName}
      />
    </div>
  ));
