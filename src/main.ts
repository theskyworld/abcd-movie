import { createApp } from "vue";
import App from "./App.vue";
import "./assets/styles/index.scss";
import router from "@/router";
import { createPinia } from "pinia";

import loadingDirective from "@/utils/loadingDirective";
import "//at.alicdn.com/t/c/font_4106328_wk46u2ppb.js";

const pinia = createPinia();
createApp(App)
  .use(router)
  .use(pinia)
  .directive("loading", loadingDirective)
  .mount("#app");
