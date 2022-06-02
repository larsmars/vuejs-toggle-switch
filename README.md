# vuejs-toggle-switch
Toggle switch for vue.js <br>
v2.0.0

<img src="https://img.shields.io/badge/license-MIT-green.svg" /> <img src="https://img.shields.io/badge/dependencies-0-brightgreen.svg" /> <img src="https://img.shields.io/badge/bugs-0-red.svg" />

[Live demo](http://softwarefun.no/#/toggleswitch) 
<br>

<img src="http://softwarefun.no/demo_toggle_switch.png" height="300">

Do you have questions or want a new feature? Use the "Issues" section :point_left:

NB! Version 1.2.32 and later use rem instead of px
NM! Version 2.0.0 and later use value prop.

## Setup
install:
```bash
npm install vuejs-toggle-switch --save
```

Import: (in your main.js)
```javascript
import ToggleSwitch from 'vuejs-toggle-switch'
Vue.use(ToggleSwitch)
```
## Usage
Use: (in your local .vue file/component, html section)

```xml

<toggle-switch
  :options="myOptions"
  :disabled="false" // optional, can use here on top level or in config section
  @change="updateMap($event.value)" // This is optional
  @selected="selectedMethod()" // This is optional
  v-model="selectedMapOption" // This is optional 2-way binding (try not to use both 1-way and 2-way)
  :value="selectedMapOption" // This is optional 1-way binding (try not to use both 1-way and 2-way)
  :name="name" // This is optional for input block
  :group="switchGroup" // This is optional, use if multiple toggle-switch on same page with same label names
  /> 

<!-- Options struct: -->
myOptions: {
  layout: {
    color: 'black',
    backgroundColor: 'lightgray',
    selectedColor: 'white',
    selectedBackgroundColor: 'green',
    borderColor: 'black',
    fontFamily: 'Arial',
    fontWeight: 'normal',
    fontWeightSelected: 'bold',
    squareCorners: false,
    noBorder: false
  },
  size: {
    fontSize: 14,
    height: 34,
    padding: 7,
    width: 100
  },
  config: {
    delay: .4,
    preSelected: 'unknown',
    disabled: false,
    items: [
        { name: 'Off', value: 'Off', color: 'white', backgroundColor: 'red' },
        { name: 'On', value: 'On', color: 'white', backgroundColor: 'green' }
    ]
  }
}
```

### Properties

| Name            | Type              | Default     | Description                        |
| ---             | ---               | ---         | ---                                |
| width           | Number            | 10          | Width of labels |
| height          | Number            | 3.25        | Height |
| padding         | Number            | 0.5         | Adjust text location in item with this |
| backgroundColor | String            | lightgray   | Background color (not selected) |
| color           | String            | black       | Text color (not selected)|
| borderColor     | String            | gray        | border color |
| selectedColor   | String            | white       | Text color selected item |
| selectedBackgroundColor | String    | green       | Selected item background color |
| fontFamily      | String            | Arial       | Font of item text |
| fontWeight      | String            | normal      | Font weight item (not selected) |
| fontWeightSelected      | String    | bold        | Font weight selected item |
| fontSize        | Number            | 1.5         | Text size |
| disabled        | Boolean           | false       | Disable switch |
| preSelected     | String            | On          | Set (pre) selected item |
| items           | Array             | Off/On      | Items for switch, name and value (string) mandatory |
| value           | String            | n/a         | Value, ie: v-model="selectedMapOption" |
| delay           | Number            | .4          | Transition delay between labels is seconds |
| squareCorners   | Boolean           | false       | Rounded corners of switch |
| noBorder        | Boolean           | false       | Remove border |
| group           | String            | ''          | Switch key/group name (optional) |
| name            | String            | ''          | Name for input field (optional) can be used as ref for forms etc |
| disabled (prop) | Boolean           | false       | Disable switch on top level (prop) |

<i>Labels prop can be used with or without color and backgroundColor attr, if not used the common prop: 
selectedColor and selectedBackgroundColor will be used for all labels.</i>

### Events

| Name   | Description              |
| ---    | ---                      |
| change | Triggered on toggle, user selects switch option, returns current value. @change="vmValueItem = $event.value" |
| selected | Triggered whenever user select switch item |
| input | Triggered on mount if preSelected is set or value is set, and on toggle/change |

[0]: https://img.shields.io/badge/license-MIT-green.svg
[1]: https://github.com/larsmars/vuejs-toggle-switch/blob/master/LICENSE
[2]: https://img.shields.io/badge/updated-february%202018-brightgreen.svg
[3]: https://img.shields.io/badge/dependencies-1-brightgreen.svg
[4]: https://img.shields.io/badge/npm-v1.0.11-blue.svg
[5]: https://img.shields.io/badge/bugs-0-red.svg
[98]: https://www.npmjs.org/package/vuejs-toggle-switch
[99]: https://github.com/larsmars/vuejs-toggle-switch
