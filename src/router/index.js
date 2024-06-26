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
      path: "/10",
      name: "TheCure",
      component: () => import("../views/TheCure.vue"),
    },
    {
      path: "/11",
      name: "Wish",
      component: () => import("../views/Wish.vue"),
    },
    {
      path: "/20",
      name: "TheSmiths",
      component: () => import("../views/TheSmiths.vue"),
    },
    {
      path: "/30",
      name: "TheSmithsNotRef",
      component: () => import("../views/TheSmithsIndexedDB.vue"),
    },
  ],
});

export default router;
