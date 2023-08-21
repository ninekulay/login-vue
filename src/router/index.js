import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/doopoon",
    name: "login",
    component: function () {
      return import(/* webpackChunkName: "about" */ "../views/AdView.vue");
    },
  },
  {
    path: "/doopoon-login",
    name: "doopoon",
    component: function () {
      return import(/* webpackChunkName: "about" */ "../views/LoginView.vue");
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  // Check if the route path exists, otherwise redirect to the login page
  if (to.matched.length === 0) {
    next({ name: "home" }); // Redirect to the login page
  } else {
    next(); // Continue with the navigation
  }
});

export default router;
