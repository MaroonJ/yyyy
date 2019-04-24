import Vue from 'vue'
import App from './App.vue'

import router from './js/router.js'
import VueRouter from 'vue-router'

import './js/iconfont.js'

import {Swipe,SwipeItem,InfiniteScroll} from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.use(InfiniteScroll);

import '../node_modules/mint-ui/lib/style.css'



import axios from 'axios';
Vue.prototype.$http = axios


Vue.use(VueRouter)
new Vue({
  el: '#app',
  render: h => h(App),
	router
})
