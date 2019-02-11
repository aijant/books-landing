import Vue from 'vue'
import Team from '@/components/Team.vue'
Vue.prototype.language = "de"

describe('Team', () => {
  it('has a created hook', () => {
    expect(typeof Team.created).toBe('function')
  }),

    it('sets the correct default data', () => {
      expect(typeof Team.data).toBe('function')
      const defaultData = Team.data()
      expect(defaultData.content).toEqual({})
    }),

    it('correctly sets the message when created', () => {
      const vm = new Vue(Team).$mount()
      expect(vm.links[1].icon).toBe('facebook.png')
    }),

    it('renders the correct message', () => {
      const Constructor = Vue.extend(Team)
      const vm = new Constructor().$mount()
      expect(vm.content.title).toBe('meet the team.')
    }),

    it('correctly sets the method', () => {
      const vm = new Vue(Team).$mount()
      let data = { msg: 'Judith Gillette' }
      vm.setContent(data)
      expect(vm.content.msg).toBe('Judith Gillette')
    })
})
