import Vue from 'vue'
import Contact from '@/components/Contact.vue'
Vue.prototype.language = "de"

describe('Home', () => {
  it('has a created hook', () => {
    expect(typeof Contact.created).toBe('function')
  }),

    it('sets the correct default data', () => {
      expect(typeof Contact.data).toBe('function')
      const defaultData = Contact.data()
      expect(defaultData.content).toEqual({})
    }),

    it('renders the correct message', () => {
      const Constructor = Vue.extend(Contact)
      const vm = new Constructor().$mount()
      expect(vm.content.info1).toBe('Having come to the store, we first of all try to find the right product as soon as possible.')
    }),

    it('correctly sets the method', () => {
      const vm = new Vue(Contact).$mount()
      let data = { msg: "Easy theme Setup" }
      vm.setContent(data)
      expect(vm.content.msg).toBe('Easy theme Setup')
    })
})
