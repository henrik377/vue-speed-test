import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import NProgress from "nprogress";
import "nprogress/nprogress.css";

Vue.config.productionTip = false
Vue.use(VueAxios, axios)

router.beforeResolve((to, from, next) => {
  // If this isn't an initial page load.
  if (to.name) {
      // Start the route progress bar.
      NProgress.start()
  }
  next()
})

router.afterEach((to, from) => {
  // Complete the animation of the route progress bar.
  NProgress.done()
})

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
