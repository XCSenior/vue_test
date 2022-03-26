<template>
	<div class="student">
		<h2>学生姓名：{{ name }}</h2>
		<h2>学生性别：{{ sex }}</h2>
		<h2>当前求和为：{{number}}</h2>
		<button @click="add">点我给number++</button>
		<button @click="sendStudentName">点我把学生名给App</button>
		<button @click="unbind">解绑atguigu事件</button>
		<button @click="death">销毁当前vc组件对象</button>
	</div>
</template>

<script>
export default {
	name: "Student",
	data() {
		return {
			name: "张三",
			sex: "男",
			number:0
		};
	},
	methods: {
		add(){
			console.log("add回调被调用了!");
			++this.number;
		},
		sendStudentName(){
			// 触发student组件实例身上的atguigu事件
			this.$emit("atguigu",this.name,666,888,999)
		},
		unbind(){
			this.$off("atguigu")	//解绑1个自定义事件
		},
		death(){
			this.$destroy()		//销毁了当前组件实例
			// 销毁后,vc实例的所有student实例的自定义事件全都不奏效
		}
	},
};
</script>

<style lang="less" scoped>
	.student{
		background-color: pink;
		padding: 5px;
		margin-top: 30px;
	}
</style>