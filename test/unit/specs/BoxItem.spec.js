import Vue from 'vue'
import VueResource from 'vue-resource'
import BoxItem from '@/pages/BoxItem'

Vue.use(VueResource)

describe('BoxItem.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(BoxItem)
    const component = new Constructor()
    component.$route = {params: {userId: 1, itemId: 1}}
    const vm = component.$mount()
    expect(vm.$el.querySelector('.box-item-loading')).to.be.ok
  })
})
