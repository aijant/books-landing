import { shallowMount } from '@vue/test-utils'
import Home from '@/components/Home.vue'

describe('Home', () => {
    // Проверка опций компонента
    it('has a created hook', () => {
      expect(typeof Home.created).toBe('function')
    })

})