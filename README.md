# vuejs-toggle-switch
Toggle switch for vue.js 2+

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
        preSelected="Map"
        :labels="{map: 'Map', transit: 'Transit', satellite: 'Satellite'}"
        :width="380"
        :height="24"
        :padding="2"/>
```

### Properties

| Name      | Type              | Default     | Description                        |
| ---       | ---               | ---         | ---                                |
| width     | Number           | 100       | Width of item|
| height      | Number           | 34       | Height |

`labels` object accepts HTML text (for example, you can use FontAwesome for checked/unchecked states).

### Events

| Name   | Description              |
| ---    | ---                      |
| change | Triggered whenever state of the component changes. <br>Contains: <br>`value` - state of the object <br>`srcEvent` - source click event |

