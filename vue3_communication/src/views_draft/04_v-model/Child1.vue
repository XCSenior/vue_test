<template>
  <div class="child2">
    <h1>同时绑定多个v-model</h1>
    <button @click="$emit('update:pageNo', pageNo + 2)">pageNo：{{ pageNo }}</button>
    <button @click="$emit('update:pageSize', pageSize + 3)">pageSize：{{ pageSize }}</button>
  </div>
</template>

<script setup lang="ts">
const props = defineProps(['pageNo', 'pageSize'])
const $emit = defineEmits(['update:pageNo', 'update:pageSize'])


</script>

<style scoped>
.child2 {
  width: 300px;
  height: 300px;
  background: hotpink;
}
</style>