<template>
  <div class="App">
    <div class="content">
      <img src="./assets/logo.png">
      <h1>{{ msg }}</h1>
      <p>1. nothing selected, nothing mapped </p>
      <toggle-switch
        group='phones'
        :labels="[
        {name: 'Android', color: 'white', backgroundColor: '#61BB46'}, 
        {name: 'iPhone', color: 'white', backgroundColor: '#FDB827'},
        {name: 'WinPhone', color: 'black', backgroundColor: 'yellow'}
        ]"
        :width="380"
        :selectedBackgroundColor="'green'"
        :selectedColor="'white'"
        :borderColor="'#999'"
        :backgroundColor="'lightgray'"
        :delay="3.4"
        @change="value1 = $event.value, selected1 = true"
        />
      <br>
      <span>
        <strong> Value:</strong> {{ value1 }} <strong> Selected: </strong> {{ selected1 }}
      </span>
      <br>
      <br>
      <p>2. v-model mapped + <strong>change</strong> and <strong>selected</strong> event </p>
      <toggle-switch
        :labels="[
        {name: 'Map'}, 
        {name: 'Transit' },
        {name: 'Satellite' }
        ]"
        :width="380"
        :height=24
        :padding=2
        :delay="0"
        @change="updateMap($event.value)"
        @selected="selectedEvent('Map selected')"
        v-model="value2"/>
      <br>
      <span>
        <strong> Value: </strong> {{ value2 }} <strong> Selected: </strong> {{ selected2 }}
      </span>
      <br>
      <br>
      <p>3. preSelected set ("Female"), nothing mapped </p>
      <toggle-switch
        preSelected="Female"
        :labels="[
        {name: 'Male'}, 
        {name: 'Female' }
        ]"
        :width="380"
        :borderColor="'#999'"
        :backgroundColor="'#ccc'"
        :selectedBackgroundColor="'green'"
        />
      <br>
      <span>
        <strong> Value: (not mapped) </strong> {{ value3 }}
      </span>
      <br>
      <br>
      <p>4. v-model mapped to value4, value4 is set to "Start" </p>
      <toggle-switch
        :labels="[
        {name: 'Stop', backgroundColor: 'red'}, 
        {name: 'Start', backgroundColor: 'green' }
        ]"
        :width="380"
        :borderColor="'#999'"
        :backgroundColor="'#ccc'"
        :selectedBackgroundColor="'green'"
        v-model="value4"/>
      <br>
      <span>
        <strong> Value: </strong> {{ value4 }}
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
      value4: 'Start',
      msg: 'VueJS ToggleSwitch',
    }
  },
  methods: {
    updateMap (option) {
      console.log('Update map option: ' + option)
    },
    selectedEvent(info) {
      this.selected2 = true;
      console.log(info)
      console.log('triggered map selectedEvent')
      // test v-model update of start/stop toggle
      this.value4 = 'Stop'
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

