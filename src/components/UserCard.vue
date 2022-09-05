<script setup lang="ts">
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()
</script>

<template>
  <van-cell-group>
    <van-cell title="姓名" :value="userStore.user.nickname" />
    <van-cell title="token" :value="userStore.token" />
  </van-cell-group>
</template>
