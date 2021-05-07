import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI);
//Vue路由 地址
import VueRouter from 'vue-router'
Vue.use(VueRouter);

import Main from"./components/Main.vue";
import Login from "./components/Login.vue";
import Book from "./components/Book.vue"
import Work from "./components/Work.vue"


import CNNode from "./components/CNNode.vue"


const routes = [
  {
    path: '/main',
    component: Main
  },
  {
    path:'/work',
    component: Work
  },
  {
    path:'/book',
    component: Book
  },
  {
    path:'/login',
    component:Login
  },
  {
    path:'/cnnode',
    component:CNNode
  }
]

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
