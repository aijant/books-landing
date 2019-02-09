import { shallowMount } from '@vue/test-utils'
import Vue from 'vue'
import About from '@/components/About.vue'
Vue.prototype.language = "de"

describe('About', () => {
    // Проверка опций компонента
    it('has a created hook', () => {
      expect(typeof About.created).toBe('function')
    }),

    it('sets the correct default data', () => {
      expect(typeof About.data).toBe('function')
      const defaultData = About.data()
     // console.log(defaultData)
      expect(defaultData.content).toEqual({})
    })

    it('correctly sets the message when created', () => {
      const vm = new Vue(About).$mount()
     // console.log(vm)
      expect(vm.links[1].icon).toBe('linkedin.png')
    })

    it('renders the correct message', () => {
      const Constructor = Vue.extend(About)
      const vm = new Constructor().$mount()
     // console.log(vm.content.title)
      expect(vm.content.title).toBe('We are modest.')
    }) 
})
