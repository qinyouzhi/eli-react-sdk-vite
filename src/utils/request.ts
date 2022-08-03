import request from '@utils/interceptor';
import { AxiosPromise, AxiosRequestConfig } from 'axios';

export const POST = <R>(reqConfig: AxiosRequestConfig): AxiosPromise<R> =>
  request({ ...reqConfig, method: 'POST' });

export const GET = <R>(reqConfig: AxiosRequestConfig): AxiosPromise<R> =>
  request({ ...reqConfig, method: 'GET' });
