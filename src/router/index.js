import { createRouter, createWebHistory } from "vue-router";

import Main from "../views/Main.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Main",
      component: Main,
    },
    {
      path: "/TheCure",
      name: "TheCure",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/TheCure.vue"),
    },
    {
      path: "/TheCure/Wish",
      name: "Wish",
      component: () => import("../views/Wish.vue"),
    },
    {
      path: "/TheSmiths",
      name: "TheSmiths",
      component: () => import("../views/TheSmiths.vue"),
    },
  ],
});

export default router;
