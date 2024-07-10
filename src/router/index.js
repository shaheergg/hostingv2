import { createRouter, createWebHistory } from "vue-router";
import Index from "../views/index.vue";
import dedicatedServer from "../views/dedicated-server.vue";
import dashboard from "../views/dashboard.vue";
import Account from "../views/account.vue";
import Overview from "../views/overview.vue";
import Monitoring from "../views/monitoring.vue";

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
    {
      path: "/account",
      name: "Account",
      component: Account,
    },
    {
      path: "/overview",
      name: "Overview",
      component: Overview,
    },
    {
      path: "/monitoring",
      name: "Monitoring",
      component: Monitoring,
    },
  ],
});
