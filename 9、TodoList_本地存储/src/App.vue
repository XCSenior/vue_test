<template>
	<div>
		<div id="root">
			<div class="todo-container">
				<div class="todo-wrap">
					<MyHeader :addTodo="addTodo"></MyHeader>
					<MyList :todos="todos" :checkTodo="checkTodo" :deleteTodo="deleteTodo"></MyList>
					<MyFooter :todos="todos" :checkAllTodo="checkAllTodo" :clearAllTodo="clearAllTodo"></MyFooter>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import MyHeader from './components/MyHeader.vue'
	import MyList from './components/MyList.vue'
	import MyFooter from './components/MyFooter.vue'


	export default {
		name: "App",
		components: {
			MyHeader,
			MyList,
			MyFooter
		},
		data() {
			return {
				todos:JSON.parse(localStorage.getItem("todos")) || []
			}
		},
		watch:{
			todos:{
				deep:true,
				handler(value){
					localStorage.setItem("todos",JSON.stringify(value))
				}
			}
		},
		methods: {
			// 添加一个todo
			addTodo(todoObj){
				// console.log("我是App组件,我收到了数据:",todoObj);
				this.todos.unshift(todoObj)
			},
			// 取反勾选todo
			checkTodo(id){
				this.todos.forEach(todoObj => {
					if(todoObj.id == id ){		//满足条件要找的对象的时候,取反done值
						todoObj.done = !todoObj.done
					}
				});
			},
			deleteTodo(id){
				// 删除一个todo项
				this.todos = this.todos.filter( todo => todo.id !== id )
			},
			checkAllTodo(isDone){
				this.todos.forEach((todo)=>{
					todo.done = isDone
				})
			},
			clearAllTodo(){
				// 清楚所有Todo
				this.todos = this.todos.filter((todo)=>{
					return todo.done !== true
				})
			}
		},
	};
</script>

<style>
	/*base*/
	body {
		background: #fff;
	}

	.btn {
		display: inline-block;
		padding: 4px 12px;
		margin-bottom: 0;
		font-size: 14px;
		line-height: 20px;
		text-align: center;
		vertical-align: middle;
		cursor: pointer;
		box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
		border-radius: 4px;
	}

	.btn-danger {
		color: #fff;
		background-color: #da4f49;
		border: 1px solid #bd362f;
	}

	.btn-danger:hover {
		color: #fff;
		background-color: #bd362f;
	}

	.btn:focus {
	outline: none;	
	}

	.todo-container {
		width: 600px;
		margin: 0 auto;
	}
	.todo-container .todo-wrap {
		padding: 10px;
		border: 1px solid #ddd;
		border-radius: 5px;
	}
</style>