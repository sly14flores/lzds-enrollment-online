<template>
  <div class="layout-wrapper layout-static layout-static-sidebar-inactive">
    <div class="layout-topbar">
        <img src="https://cdn.lzds.edu.ph/images/lzds-logo-small.png" class="logo" />
    </div>
    <div class="layout-main">
        <slot></slot>
    </div>
	<div class="layout-footer">
		<span class="footer-text" style="margin-left: 5px">LZDS Online Enrollment &copy; 2021</span>
	</div>    
  </div>
</template>

<script>
export default {
    name: 'LayoutWrapper',
}
</script>

<style scoped>

  .logo {
    margin-top: -12px;
    margin-left: -20px;
    width: 6rem;
  }

</style>