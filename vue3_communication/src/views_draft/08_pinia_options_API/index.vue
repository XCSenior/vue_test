<template>
    <div class="box">
        <h1>pinia 选项式API</h1>
        <div class="container">
            <Child></Child>
            <Child1></Child1>
        </div>
    </div>
</template>

<script setup lang="ts">
import Child from "./Child.vue";
import Child1 from "./Child1.vue";

</script>

<style scoped>
.box {
    width: 600px;
    height: 400px;
    background: skyblue;
}

.container {
    display: flex;
}
</style>