import Vue from 'vue'
import Router from 'vue-router'
// import Msite from '../pages/Msite/Msite.vue'
// import Order from '../pages/Order/Order.vue'
// import Profile from '../pages/Profile/Profile.vue'
// import Search from '../pages/Search/Search.vue'
import  Login  from  '../pages/Login/Login.vue'
import Shop from '../pages/Shop/Shop.vue'
import ShopGoods from '../pages/Shop/ShopGoods/ShopGoods.vue'
import ShopInfo from '../pages/Shop/ShopGoods/ShopInfo.vue'
import ShopRatings from '../pages/Shop/ShopGoods/ShopRatings.vue'
const  Msite  =  ()  =>  import('../pages/Msite/Msite.vue')
const  Search  =  ()  =>  import('../pages/Search/Search.vue')
const  Order  =  ()  =>  import('../pages/Order/Order.vue')
const  Profile  =  ()  =>  import('../pages/Profile/Profile.vue')

const originalPush = Router.prototype.push;
Router.prototype.push = function(location) {
  return originalPush.call(this, location).catch(err => err)
}
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: '',
      redirect:  '/msite'   //使得初始显示msite路由
    },
    {
      path: '/msite',
      name: '',
      component:Msite   
    },
    {
      path: '/order',
      name: '',
      component:Order 
    },
    {
      path: '/profile',
      name: '',
      component:Profile 
    },
    {
      path: '/search',
      name: '',
      component:Search,
    },
    {
      path: '/login',
      name: '',
      component:Login,
      meta:  {
        showFooter:  true
        }  //控制底部组件的显示和隐藏
    },
    {
      path:  '/shop',
      component:  Shop,
      meta:  {
        showFooter:  true
        },  //控制底部组件的显示和隐藏   
      children:  [
      {
      path:  '/shop/goods',
      component:  ShopGoods,
      meta:  {
        showFooter:  true
        },  //控制底部组件的显示和隐藏 
      },
      {
      path:  '/shop/ratings',
      component:  ShopRatings,
      meta:  {
        showFooter:  true
        },  //控制底部组件的显示和隐藏 
      },
      {
      path:  '/shop/info',
      component:  ShopInfo,
      meta:  {
        showFooter:  true
        },  //控制底部组件的显示和隐藏 
      },
      {
        path:  '',
        redirect:  '/shop/goods',
        meta:  {
          showFooter:  true
          },  //控制底部组件的显示和隐藏 
        }
      ],  
    }
        ]
              
  
})
