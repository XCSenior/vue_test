<template>
	<section class="jumbotron">
		<h3 class="jumbotron-heading">Search Github Users</h3>
		<div>
			<input 
			type="text" 
			v-model="keyWord"
			placeholder="enter the name you search"/>&nbsp;
			<button @click="searchUsers">Search</button>
		</div>
	</section>
</template>

<script>
	export default {
		name:"Search",
		data() {
			return {
				keyWord:""
			}
		},
		methods: {
			searchUsers(){
				// TODO:请求前更新List的数据
				this.$bus.$emit("updateListData",{isFirst:false,isLoading:true,errMsg:'',users:[]})
				this.$http.get(`https://api.github.com/search/users?q=${this.keyWord}`)
				.then((response) => {
					console.log("请求成功了");
					this.$bus.$emit("updateListData",{isLoading:false,errMsg:'',users:response.data.items})
				}).catch((err) => {
					console.log("请求失败了",err.message);
					this.$bus.$emit("updateListData",{isLoading:false,errMsg:err.message,users:[]})
				});
			}
		},
	}
</script>

<style>

</style>