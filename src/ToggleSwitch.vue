<template>
  <div>
    <ul :style="switchStyle" class="toggle-switch">
      <li :style="itemStyle" v-for="(label, index) in labels" :key="index">
        <input :disabled="disabled" :id="label" :value="label" :name="defaultItem" type="radio" @change.stop="toggle" v-model="defaultItem">
        <label v-if="label === selectedItem" :style="labelStyleSelected" class="slider" :for="label" type="radio">{{label}}</label>
        <label v-else :style="labelStyle" class="slider" :for="label" type="radio">{{label}}</label>
      </li>
    </ul>
  </div>
</template>

<script>
const constants = {
  color: 'black',
  backgroundColor: 'white',
  selectedColor: 'white',
  selectedBackgroundColor: '#007aff',
  borderColor: '#007aff',
  fontFamily: '"Lucida Grande","Lucida Sans Unicode", Tahoma, sans-serif',
  fontSize: 14,
  height: 34,
  padding: 7,
  width: 100,
}

const px = v => v + 'px'

export default {
  name: 'ToggleSwitch',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    height: {
      type: Number,
      default: constants.height
    },
    width: {
      type: Number,
      default: constants.width
    },
    padding: {
      type: Number,
      default: constants.padding
    },
    backgroundColor: {
      type: String,
      default: constants.backgroundColor
    },
    color: {
      type: String,
      default: constants.color
    },
    borderColor: {
      type: String,
      default: constants.borderColor
    },
    selectedColor: {
      type: String,
      default: constants.selectedColor
    },
    selectedBackgroundColor: {
      type: String,
      default: constants.selectedBackgroundColor
    },
    fontFamily: {
      type: String,
      default: constants.fontFamily
    },
    fontSize: {
      type: Number,
      default: constants.fontSize
    },
    disabled: {
      type: Boolean,
      default: false
    },
    preSelected: {
      type: String,
      default: 'unknown'
    },
    labels: {
      type: [String, Object]
    }
  },
  computed: {
    switchStyle () {
      return {
        width: px(this.width),
        height: px(this.height)
      }
    },
    itemStyle () {
      return {
        height: px(this.height),
        width: px(this.width),
        fontFamily: this.fontFamily,
        fontSize: px(this.fontSize),
        textAlign: 'center'
      }
    },
    labelStyle () {
      return {
        padding: px(this.padding),
        borderColor: this.borderColor,
        backgroundColor: this.backgroundColor,
        color: this.color
      }
    },
    labelStyleSelected () {
      return {
        padding: px(this.padding),
        borderColor: this.borderColor,
        backgroundColor: this.selectedBackgroundColor,
        color: this.selectedColor
      }
    }
  },
  data () {
    return {
      selected: !!this.value,
      selectedItem: 'unknown',
      defaultItem: this.preSelected
    }
  },
  mounted () {
    if (this.defaultItem !== 'unknown') {
      this.selectedItem = this.defaultItem
    }
  },
  methods: {
    toggle (event) {
      if (!this.disabled) {
        this.selected = true
        this.selectedItem = event.target.id,
        this.$emit('input', this.selected)
        this.$emit('change', {
          value: event.target.id,
          srcEvent: event
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
/*
.toggle-switch input[type="radio"]:checked + label,
.Checked + label {
  background:#007aff;
  color: white;
}
*/
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

.toggle-switch li:first-child label {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
}

.toggle-switch li:last-child label {
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

.toggle-switch label {
  cursor:pointer;
  border:1px solid;
}

.slider {
  -webkit-transition: .4s;
  transition: .4s;
}

</style>
