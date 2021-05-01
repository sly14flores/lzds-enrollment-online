<template>
    <div class="p-mt-2 header">
      <img :src="logo" class="logo" />
      <h3 style="color: #fff; margin-top: 0">Online Enrollment System</h3>
      <span class="p-d-inline-block" style="color: #fff; margin-top: 0">SY: 2021-22</span>
    </div>
</template>

<script>

import logo from '../assets/lzds-logo.png'

export default {
  setup() {

    return {
      logo
    }

  }    
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