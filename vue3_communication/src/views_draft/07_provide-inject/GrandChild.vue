<template>
  <div class="grand-child">
    <h1>孙子组件inject数据：</h1>
    <p>{{ car }}</p>
    <button @click="getBike">点我，爷爷的法拉利变自行车</button>
  </div>
</template>

<script setup lang="ts">
import { inject, type Ref } from 'vue';

// 注入祖先组件提供的数据：参数为key值
const car: Ref<string> | undefined = inject('TOKEN');
const getBike = () => {
    if (car) { /* 可以修改祖先的数据 */
        car.value = '自行车';
    }
};
</script>

<style scoped>
.grand-child {
  width: 200px;
  height: 200px;
  background: red;
}
</style>