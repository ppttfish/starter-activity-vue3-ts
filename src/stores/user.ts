import { LOCAL_TOKEN, LOCAL_USER } from '@/constant'
import { defineStore } from 'pinia'

const localToken = localStorage[LOCAL_TOKEN] || ''
const localUser = localStorage[LOCAL_USER] || '{}'

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    user: JSON.parse(localUser),
    token: localToken
  }),
  actions: {
    setToken(token: string) {
      if (!token) return
      this.token = token
      localStorage[LOCAL_TOKEN] = token
    },
    setUserInfo(userInfo: object) {
      if (!userInfo) return
      this.user = userInfo
      localStorage[LOCAL_USER] = JSON.stringify(userInfo)
    }
  }
})
