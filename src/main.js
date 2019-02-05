import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
Vue.prototype.language = "de"

new Vue({
  render: h => h(App),
}).$mount('#app')
