import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"
import VueResource from 'vue-resource'
import Element from 'element-ui'
import $ from 'jquery'
import axios from 'axios'
Vue.prototype.$http=axios

//import 'element-ui/lib/theme-default/index.css'
//开启debug模式
Vue.config.debug=true;
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(Element)
//定义组件，也可以像教程之前教的方法从别的文件引入
//const First={template:'<div><h2>我是第一个子页面</h2></div>'}
import firstcomponent from './component/firstcomponent.vue'
import qianduan from './component/qianduan.vue'
import sql from './component/sql.vue'
import test from './component/test.vue'
import qzhuanlan from './component/qzhuanlan.vue'
import login from './component/login.vue'
require('./mock')
//创建一个路由器实例
//并且配置路由规则
const router=new VueRouter({
	mode:'history',
	base:__dirname,
	routes:[
		//{
		//	path:'/first',
		//	component:First
		//},
		{
			path:'/',
			component:firstcomponent
		},
		{
			path:'/qianduan',
			component:qianduan
		},
		{
			path:'/sql',
			component:sql
		},
		{
			path:'/test',
			component:test
		},
		{
			path:'/qzhuanlan',
			component:qzhuanlan
		},
		{
			path:'/login',
			component:login
		}
	]
})
//启动应用
//路由器会创建一个App实例，并且挂载到选择符#app匹配的元素上
const app=new Vue({
  el: '#app',
  router:router,
  render: h => h(App)
})
