<template>
	<div class="app">
		<h1>{{ msg }},学生姓名是:{{studentName}}</h1>
		<!-- 1、通过父组件给子组件传递函数类型的props实现子给父传递数据 -->
		<School :getSchoolName="getSchoolName"></School>	
		<hr />
		<!-- 2、通过给子组件绑定自定义事件,实现子给父传递数据,使用v-on绑定 -->
		<Student v-on:atguigu="getStudentName" @demo="m1"></Student>
		<!-- 其他方式绑定自定义事件 使用ref绑定,更加灵活地实现各种需求,例如设置定时器、Ajax等 -->
		<Student ref="student"/>
	</div>
</template>

<script>
import Student from "./components/Student.vue";
import School from "./components/School.vue";

export default {
	name: "App",
	components: {
		Student,
		School,
	},
	data() {
		return {
			msg: "你好啊!",
			studentName:""
		};
	},
	methods: {
		getSchoolName(name){
			console.log("App收到了学校名",name);
		},
		getStudentName(name,...parmes){
			console.log("App收到了学生名",name,parmes);
			this.studentName = name
		},
		m1(){
			console.log("demo事件被触发啦!");
		}
	},
	mounted() {
		this.$refs.student.$on("atguigu",this.getStudentName)	//绑定自定义事件
	},
};
</script>

<style scoped>
	.app {
		background-color: gray;
	}
</style>