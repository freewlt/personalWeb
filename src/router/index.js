import Vue from 'vue'
import Router from 'vue-router'
import sum from '@/components/sum'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'sum',
      component: sum
    }
  ]
});




