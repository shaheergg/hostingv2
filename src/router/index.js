import { createRouter, createWebHistory } from "vue-router";
import Index from "../views/index.vue";
import dedicatedServer from "../views/dedicated-server.vue";
import dashboard from "../views/dashboard.vue";
export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Index",
      component: Index,
    },
    {
      path: "/dedicated-server",
      name: "DedicatedServer",
      component: dedicatedServer,
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      component: dashboard,
    },
  ],
});
