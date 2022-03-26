<template>
	<div>
		<Count></Count>
	</div>
</template>

<script>
	import Count from './components/Count.vue';
	export default {
		name: "App",
		components:{Count}
	};
</script>

<style lang="css">
	.container, .foot {
		display: flex;
		justify-content: space-around;
	}
	h4 {
		text-align: center;
	}
</style>