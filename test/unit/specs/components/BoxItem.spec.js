import Vue from 'vue'
import VueResource from 'vue-resource'
import BoxItem from '@/pages/BoxItem'

Vue.use(VueResource)

if (process.env.NODE_ENV === 'testing') {
  const VueResourceMock = require('vue-resource-mock')
  const MockData = require('../../mocks/resource')
  Vue.use(VueResourceMock, MockData)
}

describe('BoxItem.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(BoxItem)
    const component = new Constructor()
    // component.$route = {params: {userId: 1, itemId: 1}}
    component.$route = {params: {userId: 47776, itemId: 278878}}
    const vm = component.$mount()

    expect(vm.$el.querySelector('.box-item-loading')).to.be.ok // Loading first
    // vm.$on('all-fetched', () => {
    //   expect(vm.item.user).to.be.ok
    //   done()
    // })
  })
})
