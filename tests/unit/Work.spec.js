import Vue from 'vue'
import Work from '@/components/Work.vue'
Vue.prototype.language = "de"

describe('Work', () => {
  it('has a created hook', () => {
    expect(typeof Work.created).toBe('function')
  }),

    it('sets the correct default data', () => {
      expect(typeof Work.data).toBe('function')
      const defaultData = Work.data()
      expect(defaultData.content).toEqual({})
    }),

    it('correctly sets the method', () => {
      const vm = new Vue(Work).$mount()
      let data = { msg: "Easy theme Setup" }
      vm.setContent(data)
      expect(vm.content.msg).toBe('Easy theme Setup')
    })
})