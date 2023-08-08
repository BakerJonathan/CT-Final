import { useAuth0 } from '@auth0/auth0-react'

function getUser() {
    const {user}=useAuth0()

    if (!user){ return "undefined"} else {return user.sub}
}

export default getUser
