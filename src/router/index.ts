import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const history = createWebHashHistory()
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    name: "loginIndex",
    component: () => import("../views/login/index.vue"),
  },
];
const router = createRouter({
      history,
      routes
})
export default router