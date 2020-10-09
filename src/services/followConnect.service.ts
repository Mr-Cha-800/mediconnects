import { API } from 'src/constants';
import axios from 'axios';
import { EntityTypes } from 'src/types';
import { ConnectRequestInterface } from 'src/store/followConnect/state';

export const follow = async (entity: string, type: EntityTypes) =>
  axios.post<any>(`${API}/account/follow`,
    {
      entity,
      type
    }
  ).then(({ data }) => data);

export const unFollow = async (entity: string) =>
  axios.delete(`${API}/account/follow/${entity}`).then(({ data }) => data);

export const connect = async (entity: string, type: EntityTypes, message?: string) =>
  axios.post<any>(`${API}/account/connect`,
    {
      entity,
      type,
      data: {
        message
      }
    }
  ).then(({ data }) => data);

export const connectRequests = async () =>
  axios.get<{requests: ConnectRequestInterface[]}>(`${API}/account/requests`)
    .then(({ data: { requests} }) => requests);

export const acceptConnect = async (requestId: string) =>
  axios.post<any>(`${API}/account/requests/${requestId}/accept`).then(({ data }) => data);

export const rejectConnect = async (requestId: string) =>
  axios.post<any>(`${API}/account/requests/${requestId}/reject`).then(({ data }) => data);
