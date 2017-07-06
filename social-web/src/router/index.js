import Vue from 'vue'
import Router from 'vue-router'
import Regist from '@/components/Regist'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Regist',
    component: Regist
  }]
})
