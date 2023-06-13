<template>
    <el-button v-bind="$attrs">{{ title }}</el-button>
</template>

<script setup lang="ts">
import { useAttrs } from 'vue';

// 引入useAttrs方法，获取组件标签身上的属性与事件
const $attrs = useAttrs(); // 返回一个Proxy对象
// 如果用props声明一些属性呢？
const props = defineProps(['title']);
// 那么useAttrs就拿不到，props已经声明的属性了

</script>

<style scoped>
</style>