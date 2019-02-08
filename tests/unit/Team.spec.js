import { shallowMount } from '@vue/test-utils'
import Vue from 'vue'
import Team from '@/components/Team.vue'
Vue.prototype.language = "de"

describe('Team', () => {
    // Проверка опций компонента
    it('has a created hook', () => {
      expect(typeof Team.created).toBe('function')
    }),

    it('sets the correct default data', () => {
      expect(typeof Team.data).toBe('function')
      const defaultData = Team.data()
      console.log(defaultData)
      expect(defaultData.content).toEqual({})
    })

    it('correctly sets the message when created', () => {
      const vm = new Vue(Team).$mount()
     //console.log(vm)
     expect(vm.links[1].icon).toBe('facebook.png')
    })

    it('renders the correct message', () => {
      const Constructor = Vue.extend(Team)
      const vm = new Constructor().$mount()
      //console.log(vm.content.title)
     // expect(vm.$el.content.title).toBe('We are modest.')
    }) 
})
