<template>
  <div id="app">
    <router-view></router-view>
    <Notification />
  </div>
</template>

<script>
import './css/libs/bootstrap.min.css'
import './css/libs/animate.css'
import './css/libs/owl.carousel.min.css'
import './css/libs/jquery.animatedheadline.css'
import './css/libs/font-awesome.min.css'
import './css/libs/default/lineicons.min.css'
import './css/style.css';
import './js/owl.carousel.min'
import './js/jquery.min.js'
import './js/bootstrap.min.js'
/*
import './js/waypoints.min.js'
*/
/*
import './js/jquery.easing.min.js'
*/
import './js/default/jquery.animatedheadline.min.js'
import './js/jquery.counterup.min.js'
import './js/wow.min.js'
import './js/jarallax.min.js'
import './js/jarallax-video.min.js'
import './js/default/jquery.passwordstrength.js'
/*
import './js/default/dark-mode-switch.js'
*/
/*
import './js/default/active.js'
*/
/*
import './css/config.scss'
*/
import Notification from "./components/Notification";

export default {
  components: {Notification},
  created() {
      const body = document.querySelector('body');
      body.setAttribute('data-theme', 'dark')
  }
}
</script>

<style>
  a, a:hover, a:active, a:visited, a:focus {
    text-decoration: none!important;
  }
</style>
