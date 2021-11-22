import { createRouter, createWebHistory } from "vue-router";
import auth from "./auth";
import home from "./home";
import users from "./users";

const routes = [
  ...auth,
  {
    path: "/",
    component: () =>
      import(/* webpackChunkName: "home" */ "../views/layout/MainLayout"),
    props: true,
    children: [...home, ...users],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.getItem("token");
  document.title = to.name + " | Sakti Project Management";
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
