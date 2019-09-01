import layoutAside from './home/layout-aside'
import layoutHeader from './home/layout-header'
// 定义所有组件的插件
export default {
  install: function (Vue) {
    Vue.component('layout-aside', layoutAside) // 注册左导航组件
    Vue.component('layout-header', layoutHeader) // 注册头部导航组件
  }
}
