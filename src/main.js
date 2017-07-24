// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 全局引入字体图标
// npm安装font-awesome打包时候会出现路径问题
// import 'font-awesome/css/font-awesome.css'
//引入axios
import axios from 'axios'

//这种形式axios是挂载在Vue的原型下面了，使用的时候前面要加this
Vue.prototype.axios = axios
//另一种形式的axios引入,挂载在window全局下面，使用的时候前面不用加this
// window.aioxs=axios

Vue.config.productionTip = false;
//这个要放在#app这个Vue实例的前面
window.bus = new Vue();

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

