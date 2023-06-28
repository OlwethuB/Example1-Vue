import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: "/properties",
    name: "Properties",
    component: () => import("../views/Properties-View.vue")
  },
  {
    path: "/properties/:id",
    name: "Property",
    component: () => import("../views/Property-View.vue"),
    props: true,
  },{
    path: "/login",
    name: "Login",
    component: () => import("../views/Login-View.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/Register-View.vue"),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
