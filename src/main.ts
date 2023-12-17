import { createApp } from "vue";
import App from "./App.vue";
import "./assets/styles/index.scss";
import router from "@/router";
import { createPinia } from "pinia";

import loadingDirective from "@/components/base/loading/loadingDirective";
import "//at.alicdn.com/t/c/font_4106328_4ck1cg47t1i.js";

const pinia = createPinia();
createApp(App)
  .use(router)
  .use(pinia)
  .directive("loading", loadingDirective)
  .mount("#app");
