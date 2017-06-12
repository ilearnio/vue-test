import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/pages/Welcome'
import SingleBoxItem from '@/pages/SingleBoxItem'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/users/:userId/items/:itemId',
      name: 'SingleBoxItem',
      component: SingleBoxItem
    }
  ]
})
