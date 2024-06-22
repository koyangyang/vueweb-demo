import { createRouter, createWebHistory } from "vue-router";

import Login from "~/views/login.vue";
import NotFound from "~/views/404.vue";
import Test from "~/views/test.vue";
const routes = [
  {
    path: "/",
    component: Login,
  },
  {
    path: "/test/:id",
    component: Test,
    props: true,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});
export default router;
