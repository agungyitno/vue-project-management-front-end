const auth = [
  {
    path: "/register",
    name: "Register",
    meta: {
      guest: true,
    },
    component: () =>
      import(/* webpackChunkName: "auth" */ "../views/auth/Register"),
  },
  {
    path: "/login",
    name: "Login",
    meta: {
      guest: true,
    },
    props: true,
    component: () =>
      import(/* webpackChunkName: "auth" */ "../views/auth/Login"),
  },
];

export default auth;
