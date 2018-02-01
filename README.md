# vuejs-toggle-switch
Toggle switch for vue.js 2+

[Live demo](http://softwarefun.no/#/toggleswitch) <i>only image under </i>

[![license][0]][1] [![updated][2]][99] [![dependecies][3]][99]
> Only 1 dependency (vue)

<img src="https://github.com/larsmars/vuejs-toggle-switch/blob/master/demo/src/assets/demo_img.png" height="248">

## Usage
install:
```bash
npm install vuejs-toggle-switch --save
```

## Setup
Import: (in your main.js)
```javascript
import ToggleSwitch from 'vuejs-toggle-switch'
Vue.use(ToggleSwitch)
```

Use: (in your local .vue file/component, html section)

```xml

      <toggle-switch
        preSelected="Map" // This is optional     
        :labels="{map: 'Map', transit: 'Transit', satellite: 'Satellite'}"
        :width="380" // This is optional
        :height="24" // This is optional
        :padding="2" // This is optional
        @change="updateMap($event.value)" // This is optional
        @selected="selectedMethod() // This is optional
        v-model="selectedMapOption"/> // This is optional
```

### Properties

| Name      | Type              | Default     | Description                        |
| ---       | ---               | ---         | ---                                |
| width     | Number           | 100       | Width of labels|
| height      | Number           | 34       | Height |
| padding     | Number           | 7       | adjust text location in label with this |
| backgroundColor      | String           | white       | background color (not selected) |
| color     | String           | black       | text color (not selected)|
| borderColor      | String  | #007aff | border color |
| selectedColor     | String           | white     | text color selected label |
| selectedBackgroundColor      | String           | #007aff       | selected label background color |
| fontFamily     | String           | n/a  | font of label text |
| fontSize      | Number           | 14     | text size |
| disabled     | Boolean           | false       | disable switch |
| preSelected     | String           | unknown       | set (pre) selected label |
| labels     | [String, Object]           | n/a       | labels for switch |
| value     | String          | n/a       | value, ie:  v-model="selectedMapOption"  |

### Events

| Name   | Description              |
| ---    | ---                      |
| change | Triggered on toggle, user selects switch option, returns current value. @change="vmValueItem = $event.value" |
| selected | Triggered whenever user select switch item |
| input | Triggered on mount if preSelected is set or value is set, and on toggle/change |


[0]: https://img.shields.io/badge/license-MIT-green.svg
[1]: https://github.com/larsmars/vuejs-toggle-switch/blob/master/LICENSE
[2]: https://img.shields.io/badge/updated-januar%202018-brightgreen.svg
[3]: https://img.shields.io/badge/dependencies-1-brightgreen.svg
[99]: https://github.com/larsmars/vuejs-toggle-switch

