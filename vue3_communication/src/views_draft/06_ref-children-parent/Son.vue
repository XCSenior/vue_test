<template>
  <div class="son">
    <h3>我是子组件:曹植钱数{{ money }}</h3>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const money = ref(666);
const sonMethod = () => {
    alert("儿子飞了！");
};
// 组件内部数据是对外关闭的，想被访问则需对外暴露
defineExpose({
    money,
    sonMethod
})
</script>

<style scoped>
.son {
  width: 300px;
  height: 200px;
  background: cyan;
}
</style>