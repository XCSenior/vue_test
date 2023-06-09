<template>
  <div class="child">
    <p>我是子组件2</p>
    <button @click="handler">点击我触发自定义事件xxx</button>
    <button @click="myEmit('click', 'AK47')">点击我触发自定义事件click</button>
  </div>
</template>

<script setup lang="ts">
// 利用宏defineEmits方法返回的箭头函数，去触发自定义事件
// 不需要引入，在script setup中直接使用
const myEmit = defineEmits(['xxx', 'click']);

const handler = () => {
    // 第一个参数为事件类型名称。第二个及后面，为注入的参数
    myEmit('xxx', 1, 2);
}


</script>

<style scoped>
.child {
  width: 400px;
  height: 200px;
  background: pink;
}
</style>