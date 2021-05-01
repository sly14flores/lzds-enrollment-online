<template>
  <div>
  <Toast position="top-right" />
    <router-view v-slot="{ Component }" class="page-bg">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
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
    .page-bg {
        background-image: url('/images/sergey-zolkin-unsplash.png');
        background-repeat: no-repeat;
        background-size: 100%;
    }
</style>