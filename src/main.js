import Vue from 'vue'
import App from './App.vue'
import './assets/style/Variables.scss'
import './assets/style/Main.scss'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
import store from './store'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')