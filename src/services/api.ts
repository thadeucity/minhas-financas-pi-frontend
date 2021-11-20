import axios, { AxiosInstance, AxiosError, AxiosRequestConfig } from 'axios';
import { destroyCookie, parseCookies } from 'nookies';
import { AppError } from '../__api__/errors/AppError';

export const setupAPIClient = (ctx = null): AxiosInstance => {
  const cookies = parseCookies(ctx);

  const apiInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
      Authorization: `Bearer ${cookies['@PiMinhasFinancas:token']}`,
    },
  });

  apiInstance.interceptors.request.use(
    res => res,
    (error: AxiosError): Promise<AxiosRequestConfig> => {
      if (error?.response?.status === 401) {
        if (process.browser) {
          destroyCookie(ctx, '@PiMinhasFinancas:token');
        } else {
          return Promise.reject(new AppError('Unauthorized', 401));
        }
      }

      return Promise.reject(error);
    },
  );

  return apiInstance;
};
