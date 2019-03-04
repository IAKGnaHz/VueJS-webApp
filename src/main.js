import Vue from 'vue'
import app from './App.vue'
import VueRouter from 'vue-router'
import VueBlu from 'vue-blu'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import '../node_modules/vue-blu/dist/css/vue-blu.min.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap-vue/dist/bootstrap-vue.css'
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'
import router from './router/router.js'
import VueRosource from 'vue-resource'
import BootstrapVue from 'bootstrap-vue'

Vue.config.devtools = true

Vue.use(MintUI)
Vue.use(VueBlu)
Vue.use(VueRosource)
Vue.use(VueRouter)
Vue.use(BootstrapVue)

Vue.http.options.emulateJSON = true;
// Vue.http.options.headers={'Access-Control-Allow-Origin:*'};
// 引入header 轮播图组件
import { Header,SwipeItem,Swipe,Lazyload,Cell } from 'mint-ui';
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Cell.name, Cell);
Vue.use(Lazyload);


var vm = new Vue({
  el : '#app',
  render : c=>c(app),
  router
})