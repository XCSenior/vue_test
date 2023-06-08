<template>
    <div class="son">
        <h3>我是子组件</h3>
        <p>{{ props.info }}</p>
        <p>{{ money }}</p>

        <button @click="updateProps">修改props数据</button>
    </div>
</template>

<script setup lang="ts">
// 需要使用宏方法defineProps方法，去接受父组件传递过来的prop值
// defineProps是vue3中定义的宏方法，在script setup中不需要直接引入
const props = defineProps(['info', 'money']); // 数组或对象写法
console.log('props :>> ', props);

const updateProps = () => {
    props.money += 10; // props只读的
}

</script>


<style lang="scss" scoped>
.son {
    width: 400px;
    height: 200px;
    background-color: hotpink;
}
</style>