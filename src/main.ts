import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "@/styles/main.css";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import directives from "@/directives";
import components from "@/components/UI";

const app = createApp(App);

directives.forEach((directive) => {
  app.directive(directive.name, directive);
});

components.forEach((component) => {
  app.component(component.name, component);
});

app.use(store).use(router).use(ElementPlus).mount("#app");
