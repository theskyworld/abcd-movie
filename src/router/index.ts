import { createRouter, createWebHashHistory } from "vue-router";
import getHomePageData from "../server/getHomePageData";

const routes = [
  {
    path: "/",
    component: () => import("@/pages/homePage/HomePage.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
