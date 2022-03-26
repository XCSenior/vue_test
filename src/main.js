//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'
// /* 引入element-UI 组件库,引入element-UI的全部样式 */
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';

/* 按需引入 element-UI组件 */
import {Button,Row,DatePicker} from 'element-ui'

//关闭Vue的生产提示
Vue.config.productionTip = false
/* 注册全局的element-UI组件 */
Vue.component(Button.name,Button)
Vue.component(Row.name,Row)
Vue.component(DatePicker.name,DatePicker)

//创建vm
new Vue({
	el:'#app',
	render: h => h(App)
})
