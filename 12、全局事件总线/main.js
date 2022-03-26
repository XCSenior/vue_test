// 引入Vue
import Vue from 'vue'
// 引入App
import App from './App.vue'

// 关闭Vue的生产提示
Vue.config.productionTip = false

// const Demo = Vue.extend({})
// Vue.prototype.x = new Demo()	//vc

// 创建Vue实例对象vm
new Vue({
	el:"#app",
	render : h => h(App),
	beforeCreate(){
		// Vue.prototype.x =   this 	//全局事件总线的安装
		Vue.prototype.$bus = this
	}
})
