import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Retailer from "../components/Retailer";

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
    }
  ]
})
