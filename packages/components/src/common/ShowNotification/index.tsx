/** @format */

import { notification } from 'antd';
import { ReactNode } from 'react';

export enum NotificationStatus {
  Info = 'info',
  Success = 'success',
  Error = 'error',
  Warning = 'warning',
}

notification.config({
  duration: 5,
});

export const ShowNotification = (
  type: NotificationStatus,
  message: string | ReactNode,
  description: string | ReactNode,
) => {
  notification[type]({
    message,
    description,
    style: { fontFamily: 'Famtree' },
  });
};
