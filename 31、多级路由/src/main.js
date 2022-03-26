//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'
// 引入vue-router
import VueRouter from 'vue-router';
// 引入一个路由器
import router from './router'

//关闭Vue的生产提示
Vue.config.productionTip = false

Vue.use(VueRouter)	//使用插件

//创建vm
new Vue({
	el:'#app',
	render: h => h(App),
	router
})
