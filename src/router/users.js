const users = [
  {
    path: "/users",
    name: "user",
    meta: {
      title: "Users",
    },
    component: () =>
      import(/* webpackChunkName: "users" */ "../views/users/Index"),
    children: [
      {
        path: "invite",
        name: "userInvite",
        meta: {
          title: "Invite New User",
          modal: true,
        },
        component: () =>
          import(/* webpackChunkName: "users" */ "../views/users/Invite"),
      },
      {
        path: ":username/remove",
        name: "userRemove",
        meta: {
          title: `Remove User`,
          modal: true,
        },
        props: true,
        component: () =>
          import(/* webpackChunkName: "users" */ "../views/users/Remove"),
      },
    ],
  },
];

export default users;
