<template>
	<ul>
		<li :style="{opacity}">欢迎学习Vue</li>
		<li>news001 <input type="text"></li>
		<li>news002 <input type="text"></li>
		<li>news003 <input type="text"></li>
	</ul>
</template>

<script>
	export default {
		name:"News",
		data() {
			return {
				opacity:1
			}
		},
		// mounted() {
		// 	this.timer = setInterval(()=>{
		// 		this.opacity -= 0.02
		// 		if(this.opacity <= 0)	this.opacity = 1
		// 	},16)
		// },
		// beforeDestroy() {
		// 	console.log("News组件即将被销毁");
		// 	clearInterval(this.timer)
		// },
		activated() {
			console.log("News路由组件被激活了");
			this.timer = setInterval(()=>{
				this.opacity -= 0.02
				if(this.opacity <= 0)	this.opacity = 1
			},16)
		},
		deactivated() {
			console.log("News路由组件失活了");
			clearInterval(this.timer)
		},
	}
</script>

<style>

</style>