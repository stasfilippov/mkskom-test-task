import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/layouts/index.scss";
import "./assets/layouts/common/_mixins.scss";

createApp(App).use(store).use(router).mount("#app");
