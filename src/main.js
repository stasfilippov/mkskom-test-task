import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import GridLayout from "vue3-drr-grid-layout";
import "vue3-drr-grid-layout/dist/style.css";
import "./assets/layouts/index.scss";
import "./assets/layouts/common/_mixins.scss";

createApp(App).use(store).use(router).use(GridLayout).mount("#app");
