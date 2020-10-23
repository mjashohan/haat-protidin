import Vue from 'vue'
import Router from 'vue-router'
import Message from '@/components/Message'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/test',
      name: 'Message',
      component: Message
    }
  ]
})
