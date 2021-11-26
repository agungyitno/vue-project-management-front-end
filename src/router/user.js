const user = [
  {
    path: "/user",
    name: "user",
    meta: {
      title: "Users",
    },
    component: () =>
      import(/* webpackChunkName: "user" */ "../views/user/Index"),
    children: [
      {
        path: "invite",
        name: "userInvite",
        meta: {
          title: "Invite New User",
          modal: true,
        },
        component: () =>
          import(/* webpackChunkName: "user" */ "../views/user/Invite"),
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
          import(/* webpackChunkName: "user" */ "../views/user/Remove"),
      },
    ],
  },
];

export default user;
