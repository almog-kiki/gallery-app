import Vue from 'vue'
import { VuePlugin } from 'vuera'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css';
import 'react-image-lightbox/style.css';
import './style.scss'


Vue.config.productionTip = false

Vue.use(VuePlugin)

new Vue({
  render: h => h(App),
}).$mount('#app')
