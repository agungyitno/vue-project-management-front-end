const auth = [
  {
    path: "/register",
    name: "register",
    meta: {
      title: "Create new Account",
      guest: true,
    },
    component: () =>
      import(/* webpackChunkName: "auth" */ "../views/auth/Register"),
  },
  {
    path: "/login",
    name: "login",
    meta: {
      title: "Sign in",
      guest: true,
    },
    props: true,
    component: () =>
      import(/* webpackChunkName: "auth" */ "../views/auth/Login"),
  },
];

export default auth;
