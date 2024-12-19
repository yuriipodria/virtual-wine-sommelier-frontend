import { LoginData } from '../types/LoginData';
import { RegisterData } from '../types/RegisterData';
import { client } from '../utils/fetchClient';

export const registerUser = (userData: RegisterData) => {
  return client.post('/auth/register', userData);
};

export const loginUser = (loginData: LoginData) => {
  return client.post<{ token: string }>('/auth/login', loginData);
};
