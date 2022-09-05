<script setup lang="ts">
import { useLogin } from 'xt-login'
import { LOCAL_TOKEN } from '@/constant'
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()
const router = useRouter()
onMounted(async () => {
  const res = await useLogin({
    orgId: 29,
    tokenName: LOCAL_TOKEN
  })

  if (res) {
    userStore.setToken(res.token)
    userStore.setUserInfo(res)
    router.replace('/')
  }
})
</script>
<template>
  <div></div>
</template>
