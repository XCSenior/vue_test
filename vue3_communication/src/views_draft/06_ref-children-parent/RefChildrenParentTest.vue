<template>
  <div class="box">
    <h1>ref与$parent</h1>
    <h1>我是父亲曹操:{{ money }}</h1>
    <button @click="borrowMoneyFromSon">找我的儿子曹植借10元</button>
    <hr>
    <Son ref="son"></Son>
    <hr>
    <Daughter></Daughter>
  </div>
</template>

<script setup lang="ts">
// ref：可以获取真实DOM节点，也可以用获取子组件实例vc
// $parent：在子组件中，可以获取到父组件实例vc
//引入子组件
import Son from './Son.vue'
import Daughter from './Daughter.vue'
import { ref } from 'vue';
//父组件钱数
const money = ref(100000000);

// 获取子组件实例
const son = ref(); // 变量名跟子组件ref属性同名
// 父组件加10元，子组件减10元
const borrowMoneyFromSon = () => {
    money.value += 10;
    son.value.money -= 10;
    son.value.sonMethod();
};
defineExpose({ // 对外暴露
    money
})

</script>

<style scoped>
.box{
  width: 100vw;
  height: 500px;
  background: skyblue;
}
</style>