import Vue from "vue";
import VueRouter from "vue-router";
import Welcome from "../views/Welcome.vue";
import Login from "../views/Login.vue";
import NotFound from "../views/NotFound.vue";

import { isLoggedIn } from "../auth/index.js";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Welcome,
    meta: {
      allowAnonymous: false,
    },
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {
      allowAnonymous: true,
    },
  },
  {
    path: "/*",
    name: "NotFound",
    component: NotFound,
    meta: {
      allowAnonymous: true,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.name == "Login" && isLoggedIn()) {
    next({
      path: "/",
    });
  } else if (!to.meta.allowAnonymous && !isLoggedIn()) {
    next({
      path: "/login",
    });
  } else {
    next();
  }
});

export default router;
