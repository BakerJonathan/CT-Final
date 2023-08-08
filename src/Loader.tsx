import { Route, Routes } from "react-router-dom"
import routes from "./config/routes"

import {Provider} from 'react-redux'
import store from './redux/store'
import {useAuth0} from "@auth0/auth0-react";


function Loader() {
  const {isLoading}=useAuth0()
  if (isLoading){return (
  <div className="bg-green-700 min-h-screen text-white flex justify-center">
        <div className="self-center text-4xl">Loading</div>
    </div>) }

  return (
    <Provider store={store}>
        <Routes>
        {routes.map((route:any, index:any)=>(
            <Route key={index} path={route.path} element={<route.component/>}/>
        ))}
        </Routes>
    </Provider>
   )
}

export default Loader
