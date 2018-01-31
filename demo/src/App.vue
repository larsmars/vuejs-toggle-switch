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
        @change="value1 = $event.value, selected1 = true"
        />
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
        @change="updateMap($event.value)"
        @selected="selectedEvent('Map selected')"
        v-model="value2"/>
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
        :borderColor="'#999'"
        :backgroundColor="'#ccc'"
        :selectedBackgroundColor="'green'"
        v-model="value3"/>
      <br>
      <span>
        <strong> Value: </strong> {{ value3 }}
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
      value2: 'Map',
      selected2: false,
      value3: 'not selected',
      selected3: '',
      msg: 'VueJS ToggleSwitch',
    }
  },
  methods: {
    updateMap (option) {
      console.log('update map option: ' + option)
    },
    selectedEvent(info) {
      this.selected2 = true;
      console.log(info)
      // test v-model update of Male/Female toggle
      this.value3 = 'Female'
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

