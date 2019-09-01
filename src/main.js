import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import Component from './component' // 自定义组件
import 'element-ui/lib/theme-chalk/index.css'
import './style/index.less' // 引入初始化样式
import axios from 'axios'
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0' // 赋值基础地址
Vue.prototype.$axios = axios // 给 Vue对象的原型属性赋值 那么所有的Vue实例自动拥有$axios
Vue.config.productionTip = false
Vue.use(Component) // 全局注册自定义组件
Vue.use(ElementUI)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
