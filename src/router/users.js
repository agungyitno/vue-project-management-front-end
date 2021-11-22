const users = [
  {
    path: "/users",
    name: "Users",
    component: () =>
      import(/* webpackChunkName: "users" */ "../views/users/Index"),
    children: [
      {
        path: "invite",
        name: "Invite Users",
        meta: {
          modal: true,
        },
        component: () =>
          import(/* webpackChunkName: "users" */ "../views/users/Invite"),
      },
    ],
  },
];

export default users;
