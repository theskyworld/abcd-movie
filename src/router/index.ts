import { createRouter, createWebHashHistory } from "vue-router";
import getHomePageData from "../server/getHomePageData";

const routes = [
  {
    path: "/",
    component: () => import("@/pages/homePage/HomePage.vue"),
  },
  {
    path: "/netflix",
    component: () => import("@/pages/netflixPage/NetflixPage.vue"),
  },
  {
    path: "/movie",
    component: () => import("@/pages/moviePage/MoviePage.vue"),
  },
  {
    path: "/tv",
    component: () => import("@/pages/tvPage/tvPage.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
