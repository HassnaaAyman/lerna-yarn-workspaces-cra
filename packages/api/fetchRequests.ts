/** @format */

import {
  NotificationStatus,
  ShowNotification,
} from '@lucifer/components/src/common/ShowNotification';
import axiosApiInstance from './api-config';

class FetchRequests {
  async getRequests(url: string) {
    let data: any;
    let error;
    await axiosApiInstance
      .get(url)
      .then((res) => {
        data = res.data;
      })
      .catch((err) => {
        error = err.response.data.statusCode;
      });
    return { data, error };
  }

  postRequests(
    request: string,
    variables?: any,
    message?: any,
    doneMessage?: any,
  ) {
    axiosApiInstance
      .post(request, variables)
      .then(async () => {
        ShowNotification(NotificationStatus.Success, message, doneMessage);
      })
      .catch((error) => {
        ShowNotification(
          NotificationStatus.Error,
          'Error',
          error?.response?.data.message,
        );
      });
  }

  deleteRequests(request: string, message?: any, doneMessage?: any) {
    axiosApiInstance
      .delete(request)
      .then(async () => {
        ShowNotification(NotificationStatus.Success, message, doneMessage);
      })
      .catch((error) => {
        ShowNotification(
          NotificationStatus.Error,
          'Error',
          error?.response?.data.message,
        );
      });
  }

  updateRequests(
    request: string,
    variables?: any,
    message?: any,
    doneMessage?: any,
  ) {
    return axiosApiInstance
      .put(request, variables)
      .then(async () => {
        message &&
          ShowNotification(NotificationStatus.Success, message, doneMessage);
      })
      .catch((error) => {
        ShowNotification(
          NotificationStatus.Error,
          'Error',
          error?.response?.data.message,
        );
      });
  }

  PatchRequests(
    request: string,
    variables?: any,
    message?: any,
    doneMessage?: any,
  ) {
    return axiosApiInstance
      .patch(request, variables)
      .then(async () => {
        message &&
          ShowNotification(NotificationStatus.Success, message, doneMessage);
      })
      .catch((error) => {
        ShowNotification(
          NotificationStatus.Error,
          'Error',
          error?.response?.data.message,
        );
      });
  }
}

export default FetchRequests;
