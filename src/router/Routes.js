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
const Careers = Loadable({
  loader: ()=> import("../pages/Careers/Careers"),
  loading,
})
const ShowCareers = Loadable({
  loader: ()=> import("../pages/Careers/ShowCareers"),
  loading,
})
const Team = Loadable({
  loader: ()=>import("../pages/Team/Team"),
  loading,
})
const ShowTeamMembers = Loadable({
  loader: ()=>import("../pages/Team/ShowTeamMembers"),
  loading,
})
const Partners = Loadable({
  loader: ()=>import("../pages/Partners/Partners"),
  loading,
})

const Catalogue = Loadable({
  loader: ()=>import("../pages/Catalogue/Catalogue"),
  loading,
})
const CatalogueOpenPage = Loadable({
  loader: ()=>import("../pages/Catalogue/CatalogueOpenPage"),
  loading,
})
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
    component: Careers,
    path: "/careers",
    exact: true,
    sname: "Careers",
    spath: "/careers",
  },
  {
    component: ShowCareers,
    path: "/careers/:id",
    exact: true,
    sname: "Careers",
    spath: "/careers",
  },
  {
    component: Team,
    path: "/team",
    exact: true,
    sname: "Team",
    spath: "/team",
  },
  {
    component: ShowTeamMembers,
    path: "/team/:id",
    exact: true,
    sname: "Team",
    spath: "/team",
  },
  {
    component: Partners,
    path: "/partners",
    exact: true,
    sname: "Partners",
    spath: "/partners",
  },
  {
    component: Catalogue,
    path: "/catalogue",
    exact: true,
    sname: "Catalogue",
    spath: "/catalogue",
  },
  {
    component: CatalogueOpenPage,
    path: "/catalogue/:id",
    exact: true,
    sname: "Catalogue",
    spath: "/catalogue",
  },
  {
    component: Notfound,
    path: "",
    sname: "Notfound",
    spath: "/404",
  },
];
