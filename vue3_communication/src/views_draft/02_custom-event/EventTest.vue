<template>
  <div>
    <h1>事件</h1>
    <!-- 这种是原生DOM事件，会向事件回调函数注入事件对象event -->
    <pre @click="handler">
        大江东去浪淘沙，千古风流人物
    </pre>
    <button @click="handler1($event, 1, 2)">点我传递多个参数</button>

    <hr/>
    <!-- Vue2框架中，这种写法为自定义事件，可以通过.native修饰符变为原生DOM事件
        <Event1 @click=""></Event1>

        但是Vue3中，下面写法即为原生DOM事件
        即Vue3中，原生的DOM事件不管在原生标签还是自定义组件，都是原生DOM事件
     -->
    <Event1 @click="handler2"></Event1>

    <hr/>
    <!-- 绑定自定义事件，实现子组件给父组件传数据 -->
    <Event2 @xxx="handler3" @click="handler4"></Event2>
  </div>
</template>

<script setup lang="ts">
import Event1 from './Event1.vue';
import Event2 from './Event2.vue';
// 事件回调--1
const handler = (event: MouseEvent) => {
    alert("你好");
}

// 事件回调--2
const handler1 = (event: MouseEvent, a: Number, b: Number) => {
    console.log('event, a, b :>> ', event, a, b);
}

// 事件回调--3
const handler2 = () => {
    console.log("我是自定义组件的原生DOM的Click事件");
}

const handler3 = (argA: String, argB: String) => {
    console.log("触发了组件自定义事件xxx, 在父组件中调用", argA, argB);
}
const handler4 = (argA: String) => {
    console.log("触发事件自定义事件click, 在父组件中调用", argA);
}
</script>

<style scoped>
</style>