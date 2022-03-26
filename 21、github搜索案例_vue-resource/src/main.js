// 引入Vue
import Vue from 'vue'
// 引入App
import App from './App.vue'
// 引入vue-resource
import vueResource from 'vue-resource';

// 关闭Vue的生产提示
Vue.config.productionTip = false
// 使用Vue-resource插件
Vue.use(vueResource)

// 创建Vue实例对象vm
new Vue({
	el:"#app",
	render : h => h(App),
	beforeCreate() {
		// 安装全局事件总线
		Vue.prototype.$bus = this
	},
})
