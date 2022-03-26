// 该文件专门创建整个应用的路由器
import VueRouter from "vue-router";

/* 引入组件 */
import About from '../pages/About.vue'
import Home from '../pages/Home.vue'
import Message from '../pages/Message.vue'
import News from '../pages/News.vue'
import Details from '../pages/Detaills.vue'

// 创建一个路由器
const router = new VueRouter({
	routes:[
		{
			name:"guanyu",
			path:"/about",
			component:About,
			meta:{title:"关于"}
		},
		{
			name:"zhuye",
			path:"/home",
			component:Home,
			meta:{title:"主页"},
			children:[
				{
					name:"xiaoxi",
					path:"message",
					component:Message,
					meta:{	//路由元信息：可存储自定义的数据
						isAuthorization:false, 		//是否检查权限
						title:"消息"
					},
					children:[
						{
							name:"xiangqing",	//给路由起名字
							path:"detail",	//添加:id占位
							component:Details,
							props:function($route) {
								return {
									id:$route.query.id,
									title:$route.query.title
								}
							},
						}
					]
				},
				{
					name:"xinwen",
					path:"news",
					component:News,
					meta:{	
						isAuthorization:false,
						title:"新闻"
					},
					// //?　独享守卫
					// beforeEnter: (to, from, next) => {
					// 	if(localStorage.getItem("school") === "atguigu"){
					// 		next()
					// 	}else{
					// 		alert("学校名不对,无权限查看!")
					// 	}
					// }
				}
			]
		}
	]
})

//?　1、全局前置路由守卫
//!　　初始化、和每次路由切换,在完成之前都会调用回调函数
// router.beforeEach( (to,from,next) => {
// 	console.log("前置路由守卫",to,from,next);
// 	if(to.meta.isAuthorization){	//判断是否需要检查权限
// 		if(localStorage.getItem("school") === "atguigu"){
// 			next()
// 		}else{
// 			alert("学校名不对,无权限查看!")
// 		}
// 	}else{
// 		next()
// 	}
// })

// //?　2、全局后置路由守卫
// //!　　初始化、和每次路由切换,在完成之后都会调用回调函数
// router.afterEach((to,from) => {
// 	console.log("后置路由守卫",to,from);
// 	document.title = to.meta.title || "硅谷系统"
// })




/* 暴露之前先跟router商量一下,给它加一个路由守卫*/
export default router