<template>
	<div>
		<h1>当前求和为：{{$store.state.sum}}</h1>
		<select v-model.number="n">
			<option value="1">1</option>
			<option value="2">2</option>
			<option value="3">3</option>
		</select>
		<button @click="increment">+</button>
		<button @click="decrement">-</button>
		<button @click="incrementWhenOdd">当前求和为奇数再加</button>
		<button @click="incrementWait">等一等再加</button>
	</div>
</template>

<script>
	export default {
		name:"Count",
		data() {
			return {
				n:1	 //用户选择的数字
			}
		},
		methods: {
			//TODO:使用vuex中的sum来计算
			increment(){
				this.$store.commit("PLUS",this.n)
			},
			decrement(){
				this.$store.commit("MINUS",this.n)
			},
			incrementWhenOdd(){
				this.$store.dispatch("plusWhenOdd",this.n)
			},
			incrementWait(){
				this.$store.dispatch("plusWait",this.n)
			}
		},
	}
</script>

<style lang="css">
	button {
		margin-left: 5px;
	}
</style>