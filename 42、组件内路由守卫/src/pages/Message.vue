<template>
	<div>
		<ul>
			<li v-for="item in messageList" :key="item.id">
				<!-- 跳转路由并携带params参数,to的字符串写法 -->
				<!-- <router-link :to="`/home/message/detail/${item.id}/${item.title}`">{{item.title}}</router-link>&nbsp;&nbsp; -->
				<!-- to的对象写法,携带params参数 -->
				<router-link :to="{
					//path:'/home/message/detail',
					name:'xiangqing',	//使用名字跳转
					query:{
						id:item.id,
						title:item.title
					}
				}">
					{{item.title}}
				</router-link>
				<button @click="pushShow(item)">push查看</button>
				<button @click="replaceShow(item)">replace查看</button>
			</li>
		</ul>
		<hr/>
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		name:"Message",
		data() {
			return {
				messageList:[
					{id:"001",title:"消息001"},
					{id:"002",title:"消息002"},
					{id:"003",title:"消息003"}
				]
			}
		},
		methods: {
			pushShow(item){
				this.$router.push({
					name:'xiangqing',	//使用名字跳转
					query:{
						id:item.id,
						title:item.title
					}
				})
			},
			replaceShow(item){
				this.$router.replace({
					name:'xiangqing',	//使用名字跳转
					query:{
						id:item.id,
						title:item.title
					}
				})
			},
			test(){
				this.$router.go(-2)  //前进后退-2页
			}
		},
	}
</script>

<style>

</style>