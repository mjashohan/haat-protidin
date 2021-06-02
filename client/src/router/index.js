import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Retailer from "../components/Retailer"
import Wholesaler from "../components/Wholesaler"
import Manufacturer from "../components/Manufacturer"
import RetailRegister from "../components/RetailRegister"
import WholeRegister from "../components/WholeRegister"
import ManufRegister from "../components/ManufRegister"

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
      path: '/wholesaler',
      name: 'Wholesaler',
      component: Wholesaler
    },
    {
      path: '/manufacturer',
      name: 'Manufacturer',
      component: Manufacturer
    },
    {
      path: '/RetailRegister',
      name: 'RetailRegister',
      component: RetailRegister
    },
    {
      path: '/WholeRegister',
      name: 'WholeRegister',
      component: WholeRegister
    },
    {
      path: '/ManufRegister',
      name: 'ManufRegister',
      component: ManufRegister
    }
  ]
})
