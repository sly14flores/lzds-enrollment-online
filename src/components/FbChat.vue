<template>
<!-- Messenger Chat Plugin Code -->
    <div id="fb-root"></div>
      <script>
        window.fbAsyncInit = function() {
          FB.init({
            xfbml            : true,
            version          : 'v10.0'
          });
        };
        (function(d, s, id) {
          var js, fjs = d.getElementsByTagName(s)[0];
          if (d.getElementById(id)) return;
          js = d.createElement(s); js.id = id;
          js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
          fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    </script>
      <!-- Your Chat Plugin code -->
    <div class="fb-customerchat"
        attribution="page_inbox"
        page_id="916767318357990">
    </div>    
</template>

<script>
export default {
    setup() {
        
    }
}
</script>