import Vue from 'vue'
import Router from 'vue-router'
import login from '../components/common/login.vue'
import register from '../components/common/register.vue'
import admin from '../components/common/admin.vue'
import hot from  '../components/front/hot.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: hot
    },
    {
      path: '/login',
      component: login
    },
    {
      path: '/register',
      component: register
    },
    {
      path: '/admin',
      component: admin
    }
  ]
})
