import VueRouter from 'vue-router'
import homeContainer from '../components/tabbar/homeContainer.vue'
import searchContainer from '../components/tabbar/searchContainer.vue'
import memberContainer from '../components/tabbar/memberContainer.vue'
import shopcartContainer from '../components/tabbar/shopcartContainer.vue'
import newList from '../components/news/NewList.vue'
import talk from '../components/news/Talk.vue'
import video from '../components/news/Video.vue'
import photo from '../components/news/Photo.vue'
import kuaibao from '../components/news/Kuaibao.vue'
import folder from '../components/news/Folder.vue'

//使用路由
var router = new VueRouter({
  routes : [
    {path : '/', redirect: '/home' },
    {path : '/home',component : homeContainer},
    {path : '/search',component : searchContainer},
    {path : '/member',component : memberContainer},
    {path : '/shopcart',component : shopcartContainer},
    {path : '/home/newslist',component : newList},
    {path : '/home/talk',component : talk},
    {path : '/home/video',component : video},
    {path : '/home/photo',component : photo},
    {path : '/home/kuaibao',component : kuaibao},
    {path : '/home/folder',component : folder}
  ],
  linkActiveClass : 'mui-active'
})

export default router