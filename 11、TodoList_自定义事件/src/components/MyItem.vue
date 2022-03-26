<template>
  <li>
    <label>
      <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)"/>
      <!-- 如下代码也能实现功能,但不推荐,因为修改了props,违反了原则 -->
      <!-- <input type="checkbox" v-model="todo.done"> -->
      <span>{{todo.title}}</span>
    </label> 
    <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
  </li>
</template>

<script>
export default {
  name: "MyItem",
  // 声明接受todo对象
  props:["todo","checkTodo","deleteTodo"],
  methods: {
    handleCheck(id){
      // console.log("我改变了checked",id);
      // 通知App组件将对应todo的done值取反
      this.checkTodo(id)
    },
    handleDelete(id){
      if(confirm("确定删除?")){
        this.deleteTodo(id)
      }
    }
  },
  mounted() {
    // console.log(this.todo);
  },
};
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

li:hover{
	background-color: #ddd;
}

li:hover button{
	display:block;
}

</style>