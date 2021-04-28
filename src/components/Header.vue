<template>
    <!-- <div class="layout-topbar">
        <img src="https://cdn.lzds.edu.ph/images/lzds-logo-small.png" class="logo" />
    </div> -->
    <div class="p-mt-3 header">
      <img src="https://cdn.lzds.edu.ph/images/lzds-logo.png" class="logo" />
      <h3>Online Enrollment System</h3>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
/**
  .logo {
    margin-top: -12px;
    margin-left: -20px;
    width: 6rem;
  }
*/

  .header {
    text-align: center;
  }

  .header .logo {
    width: 20%;
  }  

  @media only screen and (max-width: 1200px) {
      .header .logo {
          width: 20%
      }
  }

  @media only screen and (max-width: 1024px) {
      .header .logo {
          width: 30%
      }
  }

  @media only screen and (max-width: 768px) {
      .header .logo {
          width: 40%
      }
  }

  @media only screen and (max-width: 480px) {
      .header .logo {
          width: 70%
      }
  }
</style>