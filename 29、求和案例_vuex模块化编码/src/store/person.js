// 人员管理相关功能
import axios from 'axios';
import {nanoid} from 'nanoid';
export default {
	namespaced:true,
	actions:{
		addPersonWang(context,value){
			if(value.name.indexOf("王") === 0){
				context.commit("ADD_PERSON",value)
			}else{
				alert("这人不姓王")
			}
		},
		addNameServer(context){
			axios.get("https://api.uixsj.cn/hitokoto/get?type=social")
			.then((response) => {
				const personObj = {id:nanoid(),name:response.data.slice(0,2)}
				context.commit("ADD_PERSON",personObj)
			}).catch((error) => {
				alert(error.message)
			});
		}
	},
	mutations:{
		ADD_PERSON(state,value){
			console.log('mutations中的ADD_PERSON被调用了')
			state.personList.unshift(value)
		}
	},
	state:{
		personList:[
			{id:'001',name:'张三'}
		]
	},
	getters:{
		firstPersonName(state){
			return state.personList[0].name
		}
	},
}