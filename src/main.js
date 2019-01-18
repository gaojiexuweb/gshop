/* 
  入口JS
*/
import Vue from 'vue'
import App from './App'
// 引入路由器
import router from './router'


/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h=>h(App),
  router   
  //配置路由器  多了组件标签router-link  router-view  $router $route等
})
