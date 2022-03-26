<template>
	<h2>我是About的内容</h2>
</template>

<script>
	export default {
		name:"About",
		mounted() {
			console.log("About挂载完毕");
		},
		beforeDestroy() {
			console.log("About即将被销毁");
		},
	}
</script>

<style>

</style>