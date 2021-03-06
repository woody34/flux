import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Counter from "../views/Counter.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Counter",
    component: Counter
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
