<template>
  <div>
    <h1>v-model  父亲钱数：{{ money }}</h1>
    <p>pageNo：{{ pageNo }} pageSize：{{ pageSize }}</p>
    <input type="text" v-model="info">
    <hr/>
    <!-- v-model使用在自定义组件身上时：
        1、相当于给子组件传递props.modelValue
        2、给子组件绑定自定义事件update:modelValue
     -->
    <!-- <Child :modelValue="money" @update:modelValue="updateMoney"></Child> -->
    <Child v-model="money"></Child>

     <!-- 绑定多个v-model -->
    <Child1
        v-model:pageNo="pageNo"
        v-model:pageSize="pageSize"
    ></Child1>
  </div>
</template>

<script setup lang="ts">
import Child from './Child.vue';
import Child1 from './Child1.vue';
import { ref } from 'vue';
// 1、v-model指令，最基本的作用就是收集表单数据，即数据双向绑定
const info = ref('');

// 2、v-model也可以实现组件间通信：实现父子组件数据同步的业务
// 核心原理：子组件自定义事件通知父组件传入的props值修改
const money = ref(10000);
// 自定义事件的回调
const updateMoney = (newMoney: number) => {
    money.value = newMoney;
};

// 3、自定义组件绑定多个v-model
const pageNo = ref(1);
const pageSize = ref(3);
</script>

<style scoped>
</style>