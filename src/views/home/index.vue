<script setup lang="ts">
import UserCard from '@/components/UserCard.vue'
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()

const router = useRouter()
const handleLoginClick = () => {
  router.replace('/login')
}
</script>

<template>
  <h1 class="title">首页</h1>
  <UserCard v-if="userStore.token" />
  <div v-else class="box">
    <van-button @click="handleLoginClick" plain type="primary">登录</van-button>
  </div>
</template>

<style lang="scss" scoped>
.title {
  margin: 0 20px;
  font-size: 40px;
}

.box {
  text-align: center;
}
</style>
