
<template>
  <div>
    这当然是 mine 啦
    <p>{{message}}</p>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'; // 导入 useRouter
import { ref, onBeforeMount, onMounted } from 'vue';


const message = ref('Hello, Vue 3!');
const router = useRouter(); // 创建 router 实例
// 跳转到 "main" 路由的方法
const navigateToMain = () => {
  router.push({ name: 'main', params: { } }) // 使用 router.push() 跳转到指定路由
  console.log('家人们我跳了啊');

};
onBeforeMount(() => {
  console.log('组件即将被挂载到页面上');
});

onMounted(() => {
  console.log('组件已经被挂载到页面上');
});


</script>

<style scoped>

</style>