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
    meta: {
      title: "AD LOGIN", // Set the title for this route
    },
  },
  // {
  //   path: "/doopoon-login",
  //   name: "doopoon",
  //   component: function () {
  //     return import(/* webpackChunkName: "about" */ "../views/LoginView.vue");
  //   },
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  // if (to.meta.title) {
  //   document.title = to.meta.title;
  // }
  // Check if the route path exists, otherwise redirect to the login page
  if (to.matched.length === 0) {
    next({ name: "home" }); // Redirect to the login page
  } else {
    document.title = to.meta.title || "Qonnect";
    next(); // Continue with the navigation
  }
});

export default router;
