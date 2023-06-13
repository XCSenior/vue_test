<template>
  <div>
    <h1>useAttrs</h1>
    <el-button type="primary" size="small" :icon="Edit">el-button</el-button>

    <!-- 自定义组件 -->
    <HintButton type="primary" size="small" :icon="Edit" :title="'你好大傻逼'"></HintButton>
  </div>
</template>

<script setup lang="ts">
import { Edit } from '@element-plus/icons-vue';
import HintButton from './HintButton.vue';


// vue3提供一个useAttrs方法，获取组件身上的属性和方法


</script>

<style scoped>
</style>