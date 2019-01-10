import Vue from 'vue'
import ToggleSwitch from './ToggleSwitch.vue'

const plugin = {
  install(Vue, options) {
    ToggleSwitch.applicationOptions = options;
    Vue.component('ToggleSwitch', ToggleSwitch)
  }
}

export default plugin
