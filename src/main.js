import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')

// BOOTSTRAP VUE //

// Import Bootstrap an BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

// SCSS //
import './App.scss' // Default overrides
Vue.use(BootstrapVue) // Telling Vue to use this in whole application

// Basic Icons
Vue.use(IconsPlugin)