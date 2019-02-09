import { shallowMount } from '@vue/test-utils'
import Vue from 'vue'
import Work from '@/components/Work.vue'
Vue.prototype.language = "de"

describe('Work', () => {
  // Проверка опций компонента
  it('has a created hook', () => {
    expect(typeof Work.created).toBe('function')
  }),

  it('sets the correct default data', () => {
    expect(typeof Work.data).toBe('function')
    const defaultData = Work.data()
    console.log(defaultData)
    //expect(defaultData.content).toEqual({})
  }),

 it('should show all the links', () => {
    const Constructor = Vue.extend(Work)
    const vm = new Constructor().$mount()
    expect(vm.querySelectorAll('a').length)
    .to.equal(1)
 })

})