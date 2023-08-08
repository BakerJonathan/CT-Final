import { HashRouter } from "react-router-dom"
import Navbar from "./components/Navbar"

import { Auth0Provider } from '@auth0/auth0-react';
import Loader from "./Loader";




function App() {

  return (
    <Auth0Provider domain="dev-pn53janpvc18qv4p.us.auth0.com" clientId="g2vYZLKaWL70DBn6w7sjfOBtx8rJYm27" authorizationParams={{redirect_uri:window.location.origin}}>
      <HashRouter>

        <Navbar />
          <Loader/>
      </HashRouter>
    </Auth0Provider>)
}



export default App
