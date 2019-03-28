import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import zhuce from '@/components/zhuce'
import login from '@/components/login'
import shouye from '@/components/shouye'
import xiaoxi from '@/components/xiaoxi'
import xiang from '@/components/xiang'
import qing from '@/components/qing'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      component: login
    },
    {
      path: '/shouye',
      component: shouye
    },
     {
      path: '/qing',
      component: qing
    },
    {
      path: '/xiaoxi',
      component: xiaoxi
    },
    {
      path: '/xiang',
      component: xiang
    },
    {
      path: '/zhuce',
      component: zhuce
    }
  ]
})
