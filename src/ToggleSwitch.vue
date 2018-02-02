<template>
  <div>
    <ul :style="switchStyle" class="toggle-switch">
      <li :style="itemStyle" v-for="(label, index) in labels" :key="index">
        <input :disabled="disabled" :id="label" :value="label" :name="defaultItem" type="radio" @change.stop="toggle" v-model="defaultItem">
        <label v-if="label === selectedItem" :style="labelStyleSelected" :class="{ active: !disabled }" class="slider" :for="label" type="radio">{{label}}</label>
        <label v-else :style="labelStyle" :class="{ active: !disabled }" class="slider" :for="label" type="radio">{{label}}</label>
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
      type: String
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
      type: String
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
      selected: false,
      selectedItem: 'unknown',
    }
  },
  mounted () {
    if (this.preSelected !== 'unknown') {
      this.selectedItem = this.preSelected;
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
      if (!this.disabled) {
        this.selected = true
        this.selectedItem = event.target.id,
        this.$emit('selected', this.selected)
        this.$emit('input', this.selectedItem)
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

.slider {
  -webkit-transition: .4s;
  transition: .4s;
}

</style>
