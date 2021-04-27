<template>
  <LayoutWrapper>
    <router-view />
  </LayoutWrapper>
</template>

<script>

import LayoutWrapper from './components/LayoutWrapper'

export default {
  name: 'App',
  components: {
    LayoutWrapper
  }
}
</script>

<style>

</style>
