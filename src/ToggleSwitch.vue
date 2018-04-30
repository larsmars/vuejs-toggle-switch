<template>
  <div>
    <ul :style="switchStyle" class="toggle-switch" :class="{'square' : defaultOptions.layout.roundedCorners}">
      <li :style="itemStyle" v-for="(label, index) in defaultOptions.items.labels" :key="index">
        <input :disabled="defaultOptions.items.disabled" :id="label.name" :value="label.name" :name="defaultItem" type="radio" @change.stop="toggle" v-model="defaultItem">
        <label v-if="label.name === selectedItem" :style="labelStyleSelected(label.color, label.backgroundColor)" :class="{ active: !defaultOptions.items.disabled }" :for="label.name" type="radio">{{label.name}}</label>
        <label v-else :style="labelStyle" :class="{active: !defaultOptions.items.disabled }" :for="label.name" type="radio">{{label.name}}</label>
      </li>
    </ul>
  </div>
</template>

<script>

const s = x => x + 's'
const px = v => v + 'px'

export default {
    created () {
    this.defaultOptions = {
      layout: {
        color: 'black',
        backgroundColor: 'lightgray',
        selectedColor: 'white',
        selectedBackgroundColor: 'green',
        borderColor: 'gray',
        fontFamily: 'Arial',
        fontWeight: 'normal',
        fontWeightSelected: 'bold',
        roundedCorners: false,
        noBorder: false
      },
      size: {
        fontSize: 14,
        height: 34,
        padding: 4.5,
        width: 100
      },
      items: {
        delay: .4,
        preSelected: 'On',
        disabled: false,
        labels: [
          {name: 'Off', color: 'white', backgroundColor: 'red'}, 
          {name: 'On', color: 'white', backgroundColor: 'green'}
        ]
      }
    } 
  },
  name: 'ToggleSwitch',
  props: {
    options: {
      type: Object,
      required: false
    },
    value: {
      type: String,
      required: false
    }
  },
  computed: {
    switchStyle () {
      return {
        width: px(this.defaultOptions.size.width),
        height: px(this.defaultOptions.size.height)
      }
    },
    itemStyle () {
      return {
        height: px(this.defaultOptions.size.height),
        width: px(this.defaultOptions.size.width),
        fontFamily: this.defaultOptions.layout.fontFamily,
        fontSize: px(this.defaultOptions.size.fontSize),
        textAlign: 'center'
      }
    },
    labelStyle () {
      return {
        padding: px(this.defaultOptions.size.padding),
        borderColor: this.defaultOptions.layout.noBorder ? 'transparent' : this.defaultOptions.layout.borderColor,
        backgroundColor: this.defaultOptions.layout.backgroundColor,
        color: this.defaultOptions.layout.color,
        fontWeight: this.defaultOptions.layout.fontWeight,
        transition: s(this.defaultOptions.items.delay)
      }
    }
  },
  data () {
    return {
      selected: false,
      selectedItem: 'unknown',
      defaultOptions: Object
    }
  },
  mounted () {
    if (this.options !== null && this.options !== undefined) {
      this.mergeDefaultOptionsWithProp(this.options)
    }
    if (this.defaultOptions.items.preSelected !== 'unknown') {
      this.selectedItem = this.defaultOptions.items.preSelected;
      this.$emit('input', this.selectedItem);
    } else if (this.value) {
      this.selectedItem = this.value;
      this.$emit('input', this.selectedItem);
    }
  },
  watch: {
    value: function (val) {
      this.selectedItem = val
    }
  },
  methods: {
    toggle (event) {
      if (!this.defaultOptions.items.disabled) {
        this.selected = true
        this.selectedItem = event.target.id,
        this.$emit('selected', this.selected)
        this.$emit('input', this.selectedItem)
        this.$emit('change', {
          value: event.target.id,
          srcEvent: event
        })
      }
    },
    labelStyleSelected: function (color, backgroundColor) {
      return {
        padding: px(this.defaultOptions.size.padding),
        borderColor: this.defaultOptions.layout.borderColor,
        fontWeight: this.defaultOptions.layout.fontWeightSelected,
        backgroundColor: backgroundColor !== undefined ? backgroundColor : this.defaultOptions.layout.selectedBackgroundColor,
        color: color !== undefined ? color : this.defaultOptions.layout.selectedColor,
        transition: s(this.defaultOptions.items.delay)
      }
    },
    mergeDefaultOptionsWithProp: function (options) {
      var result = this.defaultOptions
      for (var option in options)
      {
        if (options[option] !== null && typeof(options[option]) === 'object') {
          for (var subOption in options[option]) {
            if (options[option][subOption] !== undefined && options[option][subOption] !== null) {
              result[option][subOption] = options[option][subOption]
            }
          }
        } else {
          result[option] = options[option]
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
}

.toggle-switch {
  padding: 0px;
  margin: 0px;
  display: inline-flex;
}

.toggle-switch li {
  position:relative;
}

.square li:first-child label {
  border-top-left-radius: 0 !important;
  border-bottom-left-radius: 0 !important;
}

.square li:last-child label {
  border-top-right-radius: 0 !important;
  border-bottom-right-radius: 0 !important;
}

.toggle-switch li:first-child label {
  border: 1px solid;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}

.toggle-switch li:last-child label {
  border-right: 1px solid;
  border-top: 1px solid;
  border-bottom: 1px solid;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}

.toggle-switch label, .toggle-switch input {
  display:block;
  position:absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
}

.toggle-switch input[type="radio"] {
  opacity:0.01;
  z-index:100;
}

.toggle-switch li:not(:first-child):not(:last-child) label {
  border-right: 1px solid;
  border-top: 1px solid;
  border-bottom: 1px solid;
}

.active {
  cursor:pointer;
}

</style>
