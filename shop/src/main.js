// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import  {Button}  from  'mint-ui'
import  './filters'  //  加载自定义过滤器
import './mock/mockServer'
import  Split  from  './components/Split/Split.vue'
//  注册为全局组件标签
Vue.component('Split',  Split)

//  注册全局组件
Vue.component(Button.name, Button)
import  VueLazyload  from  'vue-lazyload'
import  loading  from  './common/imgs/loading.gif'
Vue.use(VueLazyload,  {
loading
})


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,//使用上vue-router
  store, // 使用上vuex
})
