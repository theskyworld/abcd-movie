import { createRouter, createWebHashHistory } from "vue-router";
import getHomePageData from "../server/getHomePageData";

const routes = [
  {
    path: "/",
    component: () => import("@/pages/homePage/HomePage.vue"),
    // 进入前请求首页数据
    beforeEnter: (from: any, to: any, next: any) => {
      getHomePageData();
      next();
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
