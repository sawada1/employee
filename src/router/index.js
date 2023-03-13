import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import addpage from '../views/addpage.vue'
import showemp from '../views/showemp.vue'
import editpage from '../views/editpage.vue'
import login from '../views/loginpage.vue'
import register from '../views/registerpage.vue'

import {auth} from '../firebase/firebase-data'
import { async } from '@firebase/util'

// const routes = [
//   {
// path: '/login',
// name: 'login',
// component: login,
//   },
//   {
// path: '/register',
// name: 'register',
// component: register,
//   },
//   {
//     path: '/',
//     name: 'home',
//     component: HomeView,
//     // meta:{
//     //   requireAuth:true,
//     // }
//   },
//   {
//     path: '/about',
//     name: 'about',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
//   },
//   {
//     path: '/add',
//     name: 'addpage',
//     component: addpage,
//   },
//   {
//     path: '/employee/:id',
//     name: 'showemp',
//     component: showemp,
//     props:true,
//   },
//   {
//     path: '/edit/:id',
//     name: 'editpage',
//     component: editpage,
//     props:true,
//   },
// ]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes:[
    {
  path: '/login',
  name: 'login',
  component: login,
    },
    {
  path: '/register',
  name: 'register',
  component: register,
    },
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { needsAuth: true }
    },
  
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
      meta: { needsAuth: true }
    },
    {
      path: '/add',
      name: 'addpage',
      component: addpage,
      meta: { needsAuth: true }
    },
    {
      path: '/employee/:id',
      name: 'showemp',
      component: showemp,
      props:true,
      meta: { needsAuth: true }
    },
    {
      path: '/edit/:id',
      name: 'editpage',
      component: editpage,
      props:true,
      meta: { needsAuth: true }
    },
  ]
});


router.beforeEach(async (to, from, next) => {
  if (to.meta.needsAuth && auth.currentUser == null){
   next('login');
  }
else{
  next();
}
});




export default router
