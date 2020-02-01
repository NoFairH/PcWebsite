import Vue from 'vue'
import VueRouter from 'vue-router'
import homepage from '@/components/homepage/homepage.vue'
import servicescope from '@/components/servicescope/servicescope.vue'
import serviceprocess from '@/components/serviceprocess/serviceprocess.vue'
import aboutus from '@/components/aboutus/aboutus.vue'
import consultation from '@/components/consultation/consultation.vue'
import feedback from '@/components/feedback/feedback.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    name: 'homepage',
    component: homepage
  },
  {
    path: '/aboutus',
    name: 'aboutus',
    component: aboutus
  },
  {
    path: '/feedback',
    name: 'feedback',
    component: feedback
  },
  {
    path: '/consultation',
    name: 'consultation',
    component: consultation
  },
  {
    path: '/servicescope',
    name: 'servicescope',
    component: servicescope
  },
  {
    path: '/serviceprocess',
    name: 'serviceprocess',
    component: serviceprocess
  }
]

const router = new VueRouter({
  routes
})

export default router
