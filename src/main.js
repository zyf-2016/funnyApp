import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import 'lib-flexible'
import axios from 'axios'
import VueLazyLoad from 'vue-lazyload'
import 'common/stylus/index.styl'
Vue.use(VueLazyLoad, {
  error: require('common/image/loading.gif'),
  loading: require('common/image/loading.gif')
})
Vue.prototype.$http = axios
// fastclick用于取消移动端点击300ms的延迟

fastclick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
