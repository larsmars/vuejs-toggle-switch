import Vue from 'vue'
import App from './App.vue'
import ToggleSwitch from 'plugin'

Vue.use(ToggleSwitch)

new Vue({
  el: '#app',
  render: h => h(App)
})
