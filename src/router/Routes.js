import React from "react";
import Loadable from "react-loadable";

const loading = () => <div>Loading...</div>;

// function () {
//     return new Promise(function(resolve, reject) {
//         setTimeout(function () {
//             resolve(import('../pages/Home/Home'))
//         },5000)
//     })
// }

const Home = Loadable({
  loader: () => import("../pages/Home/Home"),
  loading,
});
const About = Loadable({
  loader: () => import("../pages/About/About"),
  loading,
});


const Notfound = Loadable({
  loader: () => import("../pages/Notfound"),
  loading,
});

export default [
  {
    component: Home,
    path: "/",
    exact: true,
    sname: "Home",
    spath: "/",
  },
  {
    component: About,
    path: "/about",
    exact: true,
    sname: "About",
    spath: "/about",
  },
  {
    component: Notfound,
    path: "",
    sname: "Notfound",
    spath: "/404",
  },
];
