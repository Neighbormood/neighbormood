import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Home,
    meta: { requiresAuth: true },
    children: [
      {
        path: "/user",
        name: "User",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "user" */ "../views/User.vue"),
        meta: { requiresAuth: true }
      },
      {
        path: "/statistics",
        name: "Statistics",
        component: () =>
          import(
            /* webpackChunkName: "statistics" */ "../views/Statistics.vue"
          ),
        meta: { requiresAuth: true }
      },
      {
        path: "/friends",
        name: "Friends",
        component: () =>
          import(/* webpackChunkName: "friends" */ "../views/Friends.vue"),
        meta: { requiresAuth: true }
      },
      {
        // Automatic redirect from "/" to user page
        path: "",
        redirect: "/user"
      }
    ]
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Login.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  // Routes requiring authentication are redirected to login if access token not available
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!localStorage.userId) {
      next({
        name: "Login"
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
