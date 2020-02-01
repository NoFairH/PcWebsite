import Vue from 'vue'
import ElementUI from 'element-ui'
import App from './App.vue'
import router from './router'
import store from './store'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/styles/reset.css'
import animate from 'animate.css'
import '@/assets/styles/global.styl'
Vue.prototype.$store = store
Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(animate)

router.beforeEach((to, from, next) => {
    // chrome
    document.body.scrollTop = 0
    // firefox
    document.documentElement.scrollTop = 0
    // safari
    window.pageYOffset = 0
    next()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
