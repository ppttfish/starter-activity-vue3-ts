import type { AxiosPromise, AxiosRequestConfig } from 'axios'
import { httpIntance } from '@/uitls/index'

export interface MyResponseType<T> extends AxiosPromise {
  code: number
  message: string
  data: T
}

const request = <T>(config: AxiosRequestConfig): AxiosPromise<T> => {
  return httpIntance(config)
}

export default request
