import Home from "../pages/Home";
import About from "../pages/About";
import Dog from "../pages/Dog";
import Cat from "../pages/Cat";
import Fox from "../pages/Fox";
import Dashboard from "../pages/Dashboard";
import myImg from "../pages/MyImg"



interface RouteType{
    path:string,
    component:()=>JSX.Element,
    name:string
}

const routes: RouteType[]=[
    {
        path:"",
        component:Home,
        name:"Home Screen"
    },
    {
        path:"/about",
        component:About,
        name:"About"
    },
    {
        path:"/dog",
        component:Dog,
        name:"Dog"
    },
    {
        path:"/cat",
        component:Cat,
        name:"Cat"
    },
    {
        path:"/fox",
        component:Fox,
        name:"Fox"
    },
    {
        path:"/dashboard",
        component:Dashboard,
        name:"Dashboard"
    },
    {
        path:"/myimg",
        component:myImg,
        name:"My Images"
    },
]

export default routes