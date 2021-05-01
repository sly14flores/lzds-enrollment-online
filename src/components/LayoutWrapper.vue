<template>
  <div class="layout-wrapper layout-static layout-static-sidebar-inactive">
    <slot></slot>
  </div>
</template>

<script>

export default {
    name: 'LayoutWrapper',
    components: {}
}
</script>

<style scoped>

.hl {
  border: 1px solid red;
}

.layout-wrapper{
  overflow-x: hidden;
}

</style>