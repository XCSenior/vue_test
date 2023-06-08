<template>
    <div class="box">
        <h1>props我是父组件</h1>
    </div>
    <hr/>
    <Child :info="'我是曹操'" :money="money"></Child>
</template>

<script setup lang="ts">
import Child from './Child.vue';
import { ref } from 'vue';
// props可以实现父子通信，props的数据还是只读的！

let money = ref(10000);

</script>

<style scoped>
.box {
    width: 100vw;
    height: 400px;
    background: yellowgreen;
}
</style>