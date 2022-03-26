<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <h2>学生年龄：{{ myAge }}</h2>
    <button @click="updateAge">尝试修改收到的年龄</button>
  </div>
</template>

<script>
export default {
  name: "School",
  data() {
    return {
      msg: "我是尚硅谷的一个学生",
      myAge: this.age    //复制一份接收到的props数据,以便修改
    };
  },
  methods: {
    updateAge(){
      //this.age = 22;  //直接修改props的数据Vue会报警告
      this.myAge++    //修改data中复制props的数据
    }
  },
  //   props:['name','sex','age']   //简单声明接收
  props: {      //接受数据,并进行类型限制和默认值的指定,以及必要性限制
    name: {
      type: String, //name的类型是字符串
      required: true, //name是必要的
    },
    age: {
      type: Number,
      default: 99, //不传的时候的默认值
    },
    sex:{
      type:String,
      required: true
    }
  },
};
</script>

<style>
</style>