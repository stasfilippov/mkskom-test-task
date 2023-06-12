import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import GridLayout from "vue3-drr-grid-layout";
import "vue3-drr-grid-layout/dist/style.css";
import "./assets/layouts/index.scss";
import "./assets/layouts/common/_mixins.scss";
import mitt from "mitt";

const emitter = mitt();
const app = createApp(App);
app.config.globalProperties.emitter = emitter;

app.use(store).use(router).use(GridLayout).mount("#app");
