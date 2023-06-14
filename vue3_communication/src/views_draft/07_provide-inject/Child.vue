<template>
  <div class="child">
     <h1>我是子组件1</h1>
     <GrandChild></GrandChild>
  </div>
</template>

<script setup lang="ts">
import GrandChild from './GrandChild.vue';
</script>

<style scoped>
.child{
  width: 300px;
  height: 400px;
  background: yellowgreen;
}
</style>