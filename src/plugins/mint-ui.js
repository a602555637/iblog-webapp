import Vue from 'vue'
import { Button, Cell, Spinner, Loadmore, Toast } from 'mint-ui'

Vue.component(Button.name, Button)
Vue.component(Cell.name, Cell)
Vue.component(Spinner.name, Spinner)
Vue.component(Loadmore.name, Loadmore)
Vue.prototype.$Toast = Toast
