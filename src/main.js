import Vue from 'vue'
import App from './App.vue'
import vueRouter from 'vue-router'
import vueResource from 'vue-resource'

Vue.use(vueRouter)
Vue.use(vueResource)

import Index from './component/Index.vue'
import Gx from './component/Gx.vue'
import Gift from './component/Gift.vue'
import Info from './component/Info.vue'
import Content from './component/Content.vue'


const routes = [
   {path:'/index', component:Index},
   {path:'/gx', component:Gx},
   {path:'/gift', component:Gift},
   {path:'/info', component:Info},
   {path:'/content/:aid', component:Content},
   {path:'*',redirect:'/index'}
]

const router=new vueRouter({
	
	   routes:routes
})



new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
