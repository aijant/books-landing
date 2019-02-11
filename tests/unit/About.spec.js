import Vue from 'vue'
import About from '@/components/About.vue'
Vue.prototype.language = "de"

describe('About', () => {
  it('has a created hook', () => {
    expect(typeof About.created).toBe('function')
  }),

    it('sets the correct default data', () => {
      expect(typeof About.data).toBe('function')
      const defaultData = About.data()
      expect(defaultData.content).toEqual({})
    }),

    it('correctly sets the message when created', () => {
      const vm = new Vue(About).$mount()
      expect(vm.links[1].icon).toBe('linkedin.png')
    }),

    it('renders the correct message', () => {
      const Constructor = Vue.extend(About)
      const vm = new Constructor().$mount()
      expect(vm.content.title).toBe('We are modest.')
    }),

    it('correctly sets the method', () => {
      const vm = new Vue(About).$mount()
      let data = { msg: "Flowers Help You Find the Harmony" }
      vm.setContent(data)
      expect(vm.content.msg).toBe('Flowers Help You Find the Harmony')
    })
})
