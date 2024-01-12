import { createRouter, createWebHashHistory } from "vue-router";
import getHomePageData from "../server/getHomePageData";

const routes = [
  {
    path: "/",
    component: () => import("@/pages/homePage/HomePage.vue"),
    meta: {
      title: "ABCD影视",
    },
  },
  {
    path: "/netflix",
    component: () => import("@/pages/netflixPage/NetflixPage.vue"),
    meta: {
      title: "奈飞热播",
    },
  },
  {
    path: "/movie",
    component: () => import("@/pages/moviePage/MoviePage.vue"),
    meta: {
      title: "电影精选",
    },
  },
  {
    path: "/tv",
    component: () => import("@/pages/tvPage/TVPage.vue"),
    meta: {
      title: "电视剧热播",
    },
  },
  // 动漫
  {
    path: "/anime",
    component: () => import("@/pages/animePage/AnimePage.vue"),
    meta: {
      title: "动漫精选",
    },
  },
  // 综艺
  {
    path: "/variety",
    component: () => import("@/pages/varietyPage/VarietyPage.vue"),
    meta: {
      title: "综艺",
    },
  },
  // 搜索结果
  {
    path: "/search/:kw",
    name: "search",
    component: () => import("@/pages/searchResPage/SearchResPage.vue"),
  },
  // 播放页面
  {
    path: "/playing",
    component: () => import("@/pages/PlayingPage/PlayingPage.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title as string;
  }
  next();
});

export default router;
