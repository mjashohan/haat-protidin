// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import header from './components/header'
import footer from './components/footer'
import SlideImg from './components/SlideImg'
import SideNav from './components/SideNav'

Vue.config.productionTip = false
Vue.component('my-header', header)
Vue.component('my-footer', footer)
Vue.component('slide-img', SlideImg)
Vue.component('side-nav', SideNav)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
