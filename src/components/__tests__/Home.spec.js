import Vue from 'vue'
import Home from '../Home.vue'

describe('Home', () => {
    // Проверка опций компонента
    it('has a created hook', () => {
      expect(typeof Home.created).toBe('function')
    })

})