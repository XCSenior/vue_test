<template>
  <div class="child1">
    <h3>我是子组件1:曹植</h3>
  </div>
</template>

<script setup lang="ts">
import $bus from '@/bus';
import { onBeforeUnmount, onMounted } from 'vue';

// 组件挂在完毕的时候绑定事件，接收来自兄弟组件的数据
onMounted(() => {
    // 第一个参数即为事件类型，第二个参数即为事件回调
    $bus.on('car', (car: unknown) => {
        alert(car)
    });
});

onBeforeUnmount(() => {
    /* 需要解绑事件 */
});
</script>

<style scoped>
.child1 {
  width: 300px;
  height: 300px;
  background: hotpink;
}
</style>