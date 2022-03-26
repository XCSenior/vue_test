import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)

// 1、准备actions,用于响应组件的动作
const actions = {
	// plus:function (context,value) {}	//可以简写成plus(){}
	plusWhenOdd(context,value){
		if(context.state.sum % 2 !== 0){	//判断是奇数的时候
			context.commit("PLUS",value)
		}
	},
	plusWait(context,value){
		setTimeout(() => {
			context.commit("PLUS",value)
		}, 1000);
	}
}
// 2、准备mutations,用于操作状态(数据)state
const mutations = {
	PLUS(state,value){
		state.sum += value
	},
	MINUS(state,value){
		state.sum -= value
	}
}
// 3、准备state,存储共享的状态(数据)
const state ={
	sum:0 //当前的和
}

// 创建并暴露Store对象
export default new Vuex.Store({
	actions,
	mutations,
	state
})


 