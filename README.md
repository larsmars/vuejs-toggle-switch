# vuejs-toggle-switch
Toggle switch for vue.js 2+
[Live demo](http://softwarefun.no/#/toggleswitch)

<i>only image under </i>

<img src="https://github.com/larsmars/vuejs-toggle-switch/blob/master/demo/src/assets/demo_img.png" height="248">

Install:
```bash
npm install vuejs-toggle-switch --save
```

Import: (in your main.js)
```javascript
import ToggleSwitch from 'vuejs-toggle-switch'
Vue.use(ToggleSwitch)
```

Use: (in your local .vue file/component, html section)
```xml

      <toggle-switch
        :labels="{map: 'Map', transit: 'Transit', satellite: 'Satellite'}"
        :width="380"
        :height="24"
        :padding="2"
        @change="updateMap($event.value)" // This is optional
        v-model="selectedMapOption"/> // This is optional
```

### Properties

| Name      | Type              | Default     | Description                        |
| ---       | ---               | ---         | ---                                |
| width     | Number           | 100       | Width of item|
| height      | Number           | 34       | Height |
| padding     | Number           | 7       | adjust text location with this |
| backgroundColor      | String           | white       | background color |
| color     | String           | black       | text color|
| borderColor      | String  | #007aff | border color |
| selectedColor     | String           | white     | text color selected item |
| selectedBackgroundColor      | String           | #007aff       | selected item background color |
| fontFamily     | String           | n/a  | font of item text |
| fontSize      | Number           | 14     | text size |
| disabled     | Boolean           | false       | disable switch |
| preSelected     | String           | unknown       | set (pre) selected label, should not be used in combination with v-model |
| labels     | [String, Object]           | n/a       | disable switch |
| value     | String          | n/a       | value |

### Events

| Name   | Description              |
| ---    | ---                      |
| change | Triggered whenever state of the component/switch changes, @change="vmValueItem = $event.value" |
| selected | Whenever selected|

