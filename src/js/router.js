import VueRouter from 'vue-router'

import index from '../component/index.vue'
import home from '../component/index/home.vue'
import classify from '../component/index/classify.vue'
import stroll from '../component/index/stroll.vue'
import shoppingcar from '../component/index/shoppingcar.vue'
import my from '../component/index/my.vue'
import login from '../component/login/login.vue'
import register from '../component/login/register'


export default new VueRouter({
	routes:[
		{
			path:'/',redirect:'/index'
		},
		{
			path:'/index',component:index,
			children:[
				{
					path:'/home',component:home
				},
				{
					path:'/classify',component:classify
				},
				{
					path:'/stroll',component:stroll
				},
				{
					path:'/shoppingcar',component:shoppingcar
				},
				{
					path:'/my',component:my
				}
			]
		},
		{
			path:'/login',component:login
		},
		{
			path:'/register',component:register
		}
		
	]
})
