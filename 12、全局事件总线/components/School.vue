<template>
	<div class="school">
		<h2>学校名称：{{ name }}</h2>
		<h2>学校地址：{{ address }}</h2>
	</div>
</template>

<script>
export default {
	name: "School",
	props:["getSchoolName"],
	data() {
		return {
			name: "尚硅谷",
			address: "北京",
		};
	},
	mounted() {
		this.$bus.$on("hello",(data)=>{
			// console.log(this);   //当前School组件实例
			console.log("我是School组件,我收到了数据",data);
		})
	},
	beforeDestroy() {
		// this.$bus.$off()		//要是这么写,那$bus上面所有事件都没有了,完蛋了
		this.$bus.$off("hello")		//销毁当前组件的时候也要解绑事件
	},
};
</script>

<style scoped>
	.school {
		background-color: skyblue;
		padding: 5px;
	}
</style>