/* eslint-disable @typescript-eslint/no-explicit-any */
import { getAuthToken } from './authTokenCookie';

const BASE_URL =
  'https://ec2-16-170-249-41.eu-north-1.compute.amazonaws.com/api';

type RequestMethod = 'GET' | 'POST' | 'PATCH' | 'DELETE' | 'PUT';

async function request<T>(
  url: string,
  method: RequestMethod = 'GET',
  data: any = null,
): Promise<T> {
  const authToken = getAuthToken();

  const headers: Record<string, string> = {
    ...(authToken && { Authorization: `Bearer ${authToken}` }),
    ...(data && { 'Content-Type': 'application/json; charset=UTF-8' }),
  };

  const options: RequestInit = {
    method,
    headers,
    ...(data && { body: JSON.stringify(data) }),
  };

  const response = await fetch(BASE_URL + url, options);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
}

export const client = {
  get: <T>(url: string) => request<T>(url),
  post: <T>(url: string, data?: any) => request<T>(url, 'POST', data),
  patch: <T>(url: string, data: any) => request<T>(url, 'PATCH', data),
  delete: (url: string) => request(url, 'DELETE'),
  put: <T>(url: string, data: any) => request<T>(url, 'PUT', data),
};
