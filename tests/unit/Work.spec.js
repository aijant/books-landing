import { shallowMount } from '@vue/test-utils'
import Vue from 'vue'
import Work from '@/components/Work.vue'
Vue.prototype.language = "de"

describe('Home', () => {
    // Проверка опций компонента
    it('should render cerrect contents', () => {
      const Constructor  = Vue.extend(Work)
      const vm = new Constructor().$mount()
      //console.log(vm.$el.querySelector('h4').textContent)
      expect(vm.$el.querySelector('.work-title').textContent).toEqual('Lovely work')
    })
  })
