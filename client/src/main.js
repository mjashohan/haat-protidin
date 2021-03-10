// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import header from './components/header'
import footer from './components/footer'
import ImgCarousel from './components/ImgCarousel'
import SideNav from './components/SideNav'
import Grids from './components/Grids'
import Carousel from './components/Carousel'
import CarouselSlide from './components/CarouselSlide'
import Advert from './components/Advert'
import SearchBar from './components/SearchBar'

Vue.config.productionTip = false
Vue.component('my-header', header)
Vue.component('my-footer', footer)
Vue.component('slide-img', ImgCarousel)
Vue.component('side-nav', SideNav)
Vue.component('prod-list', Grids)
Vue.component('carousel', Carousel)
Vue.component('carousel-slide', CarouselSlide)
Vue.component('advert', Advert)
Vue.component('search-bar', SearchBar)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
