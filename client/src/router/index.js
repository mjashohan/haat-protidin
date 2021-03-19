import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Retailer from "../components/Retailer"
import Wholeseller from "../components/Wholeseller"
import Manufacturer from "../components/Manufacturer"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/retailer',
      name: 'Retailer',
      component: Retailer
    },
    {
      path: '/wholeseller',
      name: 'Wholeseller',
      component: Wholeseller
    },
    {
      path: '/manufacturer',
      name: 'Manufacturer',
      component: Manufacturer
    }
  ]
})
