<template>
  <div class="child">
    <h3>钱数：{{ modelValue }}</h3>
    <button @click="updateModelValue">父子组件事件同步</button>
  </div>
</template>

<script setup lang="ts">
/* 接收props */
const props = defineProps(['modelValue']);
const $emit = defineEmits(['update:modelValue'])

const updateModelValue = () => {
    $emit('update:modelValue', props.modelValue + 1000)
};
</script>

<style scoped>
.child {
  width: 600px;
  height: 300px;
  background: skyblue;
}
</style>