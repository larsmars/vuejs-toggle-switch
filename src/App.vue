<template>
  <div id="app">
    <toggle-switch value='On'/>
  </div>
</template>

<script>
import ToggleSwitch from '../src/components/ToggleSwitch.vue'

export default {
  name: 'app',
  components: {
    ToggleSwitch
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
