<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div>
    <van-grid clickable :column-num="2">
      <van-grid-item icon="home-o" text="主页" to="/" />
      <van-grid-item icon="friends-o" text="about" to="/about" />
    </van-grid>
  </div>
  <RouterView />
</template>

<style scoped>
a {
  font-size: 44px;
  color: #333;
}
</style>
