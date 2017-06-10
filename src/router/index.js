import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/pages/Welcome'
import BoxItem from '@/pages/BoxItem'

Vue.use(Router)

if (process.env.NODE_ENV === 'testing') {
  const VueResourceMock = require('vue-resource-mock')
  const MockData = require('../../test/unit/mocks/resource')
  Vue.use(VueResourceMock, MockData)
}

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
      name: 'BoxItem',
      component: BoxItem
    }
  ]
})