import { LOCAL_TOKEN } from '@/constant/index'

export const getToken = () => {
  console.log('localStorage[LOCAL_TOKEN]', localStorage[LOCAL_TOKEN])
  return localStorage[LOCAL_TOKEN] || ''
}
