import { LOCAL_TOKEN } from '@/constant/index'

export const getToken = () => {
  return localStorage[LOCAL_TOKEN] || ''
}
