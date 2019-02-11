import Vue from 'vue'
import Services from '@/components/Services.vue'
Vue.prototype.language = "de"

describe('Services', () => {
  it('has a created hook', () => {
    expect(typeof Services.created).toBe('function')
  }),

    it('sets the correct default data', () => {
      expect(typeof Services.data).toBe('function')
      const defaultData = Services.data()
      expect(defaultData.content).toEqual({})
    }),

    it('renders the correct message', () => {
      const Constructor = Vue.extend(Services)
      const vm = new Constructor().$mount()
      expect(vm.content.title).toBe('what we do.')
    }),

    it('correctly sets the message when created', () => {
      const Constructor = Vue.extend(Services)
      const vm = new Constructor().$mount()
      expect(vm.content.items[0].icon).toBe('cogs.png')
    }),

    it('correctly sets the method', () => {
      const vm = new Vue(Services).$mount()
      let data = { msg: 'Making the ceremony' }
      vm.setContent(data)
      expect(vm.content.msg).toBe('Making the ceremony')
    })
})