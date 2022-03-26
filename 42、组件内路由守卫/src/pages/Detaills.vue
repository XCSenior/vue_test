<template>
	<ul>
		<li>消息编号：{{this.$route.params.id}}</li>
		<li>消息标题：{{this.$route.params.title}}</li>
		<li>id:{{id}}title:{{title}}</li>
	</ul>
</template>

<script>
	export default {
		name:"Details",
		props:["id","title"],
		mounted() {
			// console.log(this.$route);
		},
	}
</script>

<style>

</style>