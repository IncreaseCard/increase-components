import React from 'react';
import PropTypes from 'prop-types';
import Popup from 'reactjs-popup';
import styled from 'styled-components';

import Icon from '../../icons/Icon';
import { Notifications, NotificationsActive } from '../../icons/icons';
import Notification from './Notification';
import newTheme from '../../themes/new';

const StyledPopup = styled(Popup)`
  width: 20rem !important;
  padding: 0 !important;
  max-height: 30rem;
  overflow-y: scroll;
  overflow-x: hidden;
`;

const propTypes = {};

const defaultProps = {
  theme: newTheme,
  notifications: []
};

function NotificationsWidget({ className, notifications }) {
  const iconSrc = notifications.length > 0 ? NotificationsActive : Notifications;
  return (
    <StyledPopup
      closeOnDocumentClick
      position="bottom right"
      trigger={() => (
        <button className={className}>
          <Icon src={iconSrc} />
        </button>
      )}
    >
      <div style={{ padding: '20px' }}>
        <div
          style={{
            borderBottom: '1px solid #d8d8d8',
            color: '#303E69',
            fontWeight: 'bold',
            paddingBottom: '15px'
          }}
        >
          Notificaciones
        </div>
        {notifications &&
          notifications.map((notification) => (
            <Notification key={notification.message} {...notification} />
          ))}
      </div>
    </StyledPopup>
  );
}

const StyledNotificationsWidget = styled(NotificationsWidget)`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: ${(props) => (props.notifications.length > 0 ? '#1C2644' : props.theme.colors.whiteTone)};
  padding-right: 1rem;
  margin-right: 1rem;
  border-right: 1px solid ${(props) => props.theme.colors.whiteTone};
`;

StyledNotificationsWidget.propTypes = propTypes;
StyledNotificationsWidget.defaultProps = defaultProps;

export default StyledNotificationsWidget;
