import Vue from 'vue'
import Features from '@/components/Features.vue'
Vue.prototype.language = "de"

describe('Features', () => {
  it('has a created hook', () => {
    expect(typeof Features.created).toBe('function')
  }),

    it('sets the correct default data', () => {
      expect(typeof Features.data).toBe('function')
      const defaultData = Features.data()
      expect(defaultData.content).toEqual({})
    }),

    it('renders the correct message', () => {
      const Constructor = Vue.extend(Features)
      const vm = new Constructor().$mount()
      expect(vm.content.title).toBe('FEATURES.')
    }),

    it('correctly sets the method', () => {
      const vm = new Vue(Features).$mount()
      let data = { msg: "A Showcase of Creative" }
      vm.setContent(data)
      expect(vm.content.msg).toBe('A Showcase of Creative')
    })
})
