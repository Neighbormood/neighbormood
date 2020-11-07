import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Home,
    children: [
      {
        path: "/user",
        name: "User",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "user" */ "../views/User.vue")
      },
      {
        path: "/statistics",
        name: "Statistics",
        component: () =>
          import(/* webpackChunkName: "statistics" */ "../views/Statistics.vue")
      },
      {
        path: "/friends",
        name: "Friends",
        component: () =>
          import(/* webpackChunkName: "friends" */ "../views/Friends.vue")
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

export default router;
