/** @format */

import axios from 'axios';
import {
  NotificationStatus,
  ShowNotification,
} from '@lucifer/components/src/common/ShowNotification';

const axiosApiInstance = axios.create();

axiosApiInstance.interceptors.request.use(
  async (config) => {
    config.baseURL = 'https://picksell-lucifer-staging.herokuapp.com';
    config.headers = {
      Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
    config.params = { ...config.params };
    return config;
  },
  (error) => {
    Promise.reject(error);
  },
);

axiosApiInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async function Error(error) {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      ShowNotification(
        NotificationStatus.Warning,
        'Un Authenticated',
        error.response?.data.message,
      );
      localStorage.removeItem('access_token');
      return (window.location.href = '/login');
    }

    if (error?.response?.status === 403) {
      ShowNotification(
        NotificationStatus.Warning,
        'Un Authorized',
        error.response.data.message,
      );
      // return (window.location.href = "/");
    }

    if (error.response?.status === 402) {
      ShowNotification(
        NotificationStatus.Error,
        'Internal Server Error',
        error.response.data.message,
      );
    }

    if (error.response?.status === 404) {
      ShowNotification(
        NotificationStatus.Warning,
        'Not Found',
        error.response.data.message,
      );
      // return (window.location.href = "/");
    }

    if (error.response?.status === 500) {
      ShowNotification(
        NotificationStatus.Error,
        'Internal Server Error',
        error.response.data.message,
      );
    }
    return Promise.reject(error);
  },
);

export default axiosApiInstance;
