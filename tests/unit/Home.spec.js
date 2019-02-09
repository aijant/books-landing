import { shallowMount } from '@vue/test-utils'
import Vue from 'vue'
import Home from '@/components/Home.vue'
Vue.prototype.language = "de"

describe('Home', () => {
    // Проверка опций компонента
    it('has a created hook', () => {
      expect(typeof Home.created).toBe('function')
    }),

    it('sets the correct default data', () => {
      expect(typeof Home.data).toBe('function')
      const defaultData = Home.data()
      //console.log(defaultData)
      expect(defaultData.content).toEqual({})
    }),

    it('renders the correct message', () => {
      const Constructor = Vue.extend(Home)
      const vm = new Constructor().$mount()
     // console.log(vm.content.text1)
       expect(vm.content.text1).toBe('Exclusive design by best Florists.')
    }),      

    it('correctly sets the message when created', () => {
      const vm = new Vue(Home).$mount()
      //console.log(vm)
      expect(vm.images[0].alt).toBe('Hello flower')
    }),
    it('correctly sets the message when created', () => {
      const vm = new Vue(Home).$mount()
      let data = {msg: "hello"}
      vm.setText(data)
     // console.log(vm.content.msg)
      //expect(vm.images[0].alt).toBe('Hello flower')
    })

    
  })
