import { User } from '../types/User';
import { client } from '../utils/fetchClient';

export const registerUser = (userData: Omit<User, 'id'>) => {
  return client.post<User>('/auth/regiter', userData);
};
