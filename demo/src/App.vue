<template>
  <div class="App">
    <div class="content">
      <img src="./assets/logo.png">
      <h1>{{ msg }}</h1>
      <toggle-switch
        group='phones'
        :labels="{option1: 'Android', option2: 'iPhone'}"
        :width="380"
        :selectedBackgroundColor="'green'"
        :selectedColor="'white'"
        :borderColor="'#999'"
        :backgroundColor="'lightgray'"
        @change="value1 = $event.value"
        v-model="selected1"/>
      <br>
      <span>
        <strong> Value:</strong> {{ value1 }} <strong> Selected: </strong> {{ selected1 }}
      </span>
      <br>
      <br>
      <toggle-switch
        preSelected="Map"
        :labels="{map: 'Map', transit: 'Transit', satellite: 'Satellite'}"
        :width="380"
        :height=24
        :padding=2
        @change="value2 = $event.value"
        v-model="selected2"/>
      <br>
      <span>
        <strong> Value: </strong> {{ value2 }} <strong> Selected: </strong> {{ selected2 }}
      </span>
      <br>
      <br>
      <toggle-switch
        preSelected="Male"
        :labels="{male: 'Male', female: 'Female'}"
        :width="380"
        @change="value3 = $event.value"
        :borderColor="'#999'"
        :backgroundColor="'#ccc'"
        :selectedBackgroundColor="'green'"
        v-model="selected3"/>
      <br>
      <span>
        <strong> Value: </strong> {{ value3 }} <strong> Selected: </strong> {{ selected3 }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      value1: 'not selected',
      selected1: false,
      value2: 'not selected',
      selected2: false,
      value3: 'not selected',
      selected3: false,
      msg: 'VueJS ToggleSwitch',
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.content {
  border: 1px solid lightgray;
  text-align: center;
  padding: 10px;
}
</style>

