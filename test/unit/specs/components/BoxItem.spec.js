import Vue from 'vue'
import VueResource from 'vue-resource'
import VueResourceMock from 'vue-resource-mock'
import MockData from '../../mocks/resource'
import BoxItem from '@/components/BoxItem'

Vue.use(VueResource)
Vue.use(VueResourceMock, MockData)

describe('BoxItem.vue', () => {
  it('should render correct contents', (done) => {
    const Ctor = Vue.extend(BoxItem)
    const vm = new Ctor({ propsData: {userId: 1, itemId: 1} }).$mount()

    expect(vm.$el.querySelector('.box-item-loading')).to.be.ok // Loading first
    vm.$on('all-fetched', () => {
      expect(vm.item.user).to.be.ok
      done()
    })
  })
})
