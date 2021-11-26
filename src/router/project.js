const project = [
  {
    path: "/project",
    name: "project",
    meta: {
      title: "Projects",
    },
    component: () =>
      import(/* webpackChunkName: "project" */ "../views/project/Index"),
    children: [
      {
        path: "new",
        name: "projectNew",
        meta: {
          title: "Create New Project",
          modal: true,
        },
        component: () =>
          import(/* webpackChunkName: "project" */ "../views/project/New"),
      },
      {
        path: ":slug/remove",
        name: "projectRemove",
        meta: {
          title: "Remove Project",
          modal: true,
        },
        props: true,
        component: () =>
          import(/* webpackChunkName: "project" */ "../views/project/Remove"),
      },
    ],
  },
];

export default project;
