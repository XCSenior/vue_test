<template>
  <div class="dau">
     <h1>我是闺女曹杰钱数{{ money }}</h1>
     <button @click="get10000YuanFromDad($parent)">点击我爸爸，给我10000元</button>
  </div>
</template>

<script setup lang="ts">
import { ref, type ComponentPublicInstance } from 'vue';

const money = ref(999999);
const get10000YuanFromDad = ($parent: ComponentPublicInstance | null) => {
    money.value += 10000;
    if ($parent && $parent.hasOwnProperty('money')) {
        $parent!.money -= 10000;
    }

    console.log('$parent :>> ', $parent);
}
</script>

<style scoped>
.dau{
  width: 300px;
  height: 300px;
  background: hotpink;
}
</style>