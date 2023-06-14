<template>
  <div class="box">
    <h1>Provide与Inject</h1>
    <p>爷爷我的车是什么：{{ car }}</p>
    <hr />
    <Child></Child>
  </div>
</template>

<script setup lang="ts">
import { provide, ref } from "vue";
import Child from "./Child.vue";

// vue3提供了provide和inject，可以实现隔辈组件传递数据

const car = ref('法拉利');

// 爷爷组件给所有后代提供数据
/** provide需要两个参数
 * @param key 提供数据的key值
 * @param data 提供的数据本身
*/
provide('TOKEN', car)

</script>

<style scoped>
.box {
  width: 100vw;
  height: 600px;
  background: skyblue;
}
</style>