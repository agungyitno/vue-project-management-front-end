const home = [
  {
    path: "/",
    name: "home",
    meta: {
      title: "Home",
    },
    component: () =>
      import(/* webpackChunkName: "home" */ "../views/home/Home"),
  },
];

export default home;
