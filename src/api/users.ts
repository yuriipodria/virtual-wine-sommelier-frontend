import { UserData } from '../types/UserData';
import { client } from '../utils/fetchClient';

export const getUserInfo = () => {
  return client.get<UserData>('/users/profile');
};
