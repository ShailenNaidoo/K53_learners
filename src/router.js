import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "*",
      redirect: "/login"
    },
    {
      path: "/login",
      name: "Login",
      component: () => import("./views/Login.vue")
    },
    {
      path: "/app",
      component: () => import("./views/App.vue"),
      meta: { requiresAuth: true },
      children: [
        {
          path: "dashboard",
          name: "Dashboard",
          meta: { requiresAuth: true },
          component: () => import("./views/Dashboard.vue")
        },
        {
          path: "courses",
          name: "Courses",
          meta: { requiresAuth: true },
          component: () => import("./views/Courses.vue")
        }, 
        {
          path: "exams",
          name: "Exams",
          meta: { requiresAuth: true },
          component: () => import("./views/Exams.vue")
        },
        {
          path: "account",
          name: "Account",
          meta: { requiresAuth: true },
          component: () => import("./views/Account.vue")
        }
      ]
    }
  ]
});
