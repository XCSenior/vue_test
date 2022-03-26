import Vue from 'vue'		// 引入Vue
import App from './App.vue'		// 引入App

import store from './store/index.js'// 引入store

// 关闭Vue的生产提示
Vue.config.productionTip = false

// 创建Vue实例对象vm
new Vue({
	el:"#app",
	render : h => h(App),
	store,
})
