<template>
  <Toast position="top-right" />
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script>

import Toast from 'primevue/toast';

export default {
  name: 'App',
  components: {
    Toast
  }
}
</script>

<style lang="scss">
  @import './App.scss';
</style>

<style>
    .lzds-center {
        text-align: center;
    }
</style>