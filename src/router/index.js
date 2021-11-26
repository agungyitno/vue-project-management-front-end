import { createRouter, createWebHistory } from "vue-router";
import auth from "./auth";
import home from "./home";
import project from "./project";
import user from "./user";

const routes = [
  ...auth,
  {
    path: "/",
    component: () =>
      import(/* webpackChunkName: "home" */ "../views/layout/MainLayout"),
    props: true,
    children: [...home, ...user, ...project],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.getItem("token");
  document.title = to.meta.title + " | Sakti Project Management";
  if (to.matched.some((record) => !record.meta.guest) && !loggedIn) {
    next("/login");
    return;
  }
  if (
    to.matched.some(
      (record) => record.name == "Login" || record.name == "Register"
    ) &&
    loggedIn
  ) {
    next("/");
    return;
  }
  next();
});

export default router;
