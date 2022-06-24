import { createRouter, createWebHistory } from 'vue-router'
import Login from "@/views/auth/Login";
import Register from "@/views/auth/Register";
import HomeView from "@/views/HomeView";
import DefaultLayout from "@/views/DefaultLayout";
import AuthService from "@/views/auth/AuthService";
import ProjectView from "@/views/ProjectView";
const routes = [
  {
    // /home/blogs
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: 'home',
        name: 'home',
        component: HomeView,
      },
      {
        path: '/project/:id',
        name: 'project',
        component: ProjectView,
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
// comment beforeeach temporarily . for testing
// router.beforeEach((to, from, next) => {
//   if (!AuthService.isLoggedIn() && to.name !== 'login' && to.name !== 'register') {
//     return next({name: 'login'})
//   }
//   next();
// })

export default router
