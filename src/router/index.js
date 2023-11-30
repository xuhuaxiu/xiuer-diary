
import { createRouter, createWebHashHistory } from 'vue-router';

import Main from '@/page/main/index.vue'
import Home from '@/page/main/Home.vue'
import About from '@/page/main/About.vue'
import Mine from '@/page/main/Mine.vue'


// /**
//  *  说明：webpack 提供的 require.ensure 方法，它是一种按需加载（code splitting）模块的方式，用于异步加载模块，从而提高应用的性能。
//  *  具体来说，它会将模块的加载推迟到运行时的某个时刻，而不是在应用初始化时就加载所有的模块。
//  *  @param [] 数组，用于指定需要加载的模块的依赖关系
//  *  @param  ()=>r(require('@/页面路由'))  回调函数，用于定义模块的加载方式。在这里，它使用了动态 import 语句加载 @/页面路由 模块，并将结果传递给回调函数。
//  *  @param  ModuleName   字符串，表示这个异步加载的模块的名称，这个名称在 webpack 构建时用于标识和管理这个异步加载的模块
//  *
//  */
// /*const Main = r => require.ensure([], () => r(require('@/page/Main')), 'Main');
// const Home = r => require.ensure([], () => r(require('@/page/Home')), 'Home');
// const About = r => require.ensure([], () => r(require('@/page/About')), 'About');
// const Mine = r => require.ensure([], () => r(require('@/page/Mine')), 'Mine');*/
//
const routers = [
    {path:  '/', redirect: {name: 'main'}},
    {path:  '/main', name: 'main', component: Main,},
]
/*   children: [
           {path: '/home', component: Home},
           {path: '/about', component: About},
           {path: '/mine', component: Mine}
       ]*/
/**
 createRouter: 是Vue Router的4.x版本及以上的写法，引入了 Composition API，并且支持 Vue 3 的新特性。
 createRouter 使用 Composition API
 在 createRouter 中，你需要使用 useRoute, useRouter 这样的 Composition API 函数来获取当前路由和路由实例。
 */
const router = createRouter({
    history: createWebHashHistory(),
    routes: routers,
});
//
// //const router = new VueRouter(routers)
// //new VueRouter: 是Vue Router的3.x版本及以下的写法，适用于Vue 2应用。
// //不支持 Composition API。
// //在 new VueRouter 中，你可以通过 this.$route 和 this.$router 直接获取当前路由和路由实例。
 export default router;