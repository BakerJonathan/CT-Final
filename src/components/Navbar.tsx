import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react';

function Navbar() {
  const [isVisible, setItVisible]= useState(false)
  const dropDown=()=>{setItVisible(!isVisible)}

  const {isAuthenticated,loginWithRedirect,logout}=useAuth0()
  const signInOnClick=()=>{loginWithRedirect()}
  const signOutOnClick=()=>{logout()}


  return (

        <nav className='flex justify-between flex-wrap bg-yellow-900 p-4  border-black border-2 '>
             <div className='flex  text-green-50 mr-6 ml-7 hover:text-green-200 '>
                <Link to='/' className='font-bold text-2xl'>PinAnimal</Link>
            </div>

            <div className='block '>
                <button onClick={dropDown} className='flex px-3 py-2 text-green-50 border rounded border-green-50 hover:text-green-200 hover:border-green-200'>
                    <i className='fas fa-bars'></i>
                </button>
            </div>

            { isVisible ? (
            <div className='w-full'>
                                <div className='w-full h-0.5 text-white mt-4'/>
                                <div className='w-full h-0.5 text-green-50 mt-4'/>

                <div className='w-full h-0.5 bg-green-50 mt-4'/>
                <div className="text-md ">
                    <button className='p-3 m-5 bg-green-400 hover:bg-green-500 justify-center rounded-2xl border-black border ring-2 ring-yellow-950'>
                            <Link to='/' className='flex self-center  text-yellow-100 ml-2 mr-2 '>Home</Link>
                    </button>

                    <button className='p-3 m-5 bg-green-400 hover:bg-green-500 justify-center rounded-2xl border-black border ring-2 ring-yellow-950'>
                            <Link to='/dog' className='flex self-center  text-yellow-100 ml-2 mr-2 '>Dog</Link>
                    </button>

                    <button className='p-3 m-5 bg-green-400 hover:bg-green-500 justify-center rounded-2xl border-black border ring-2 ring-yellow-950'>
                            <Link to='/cat' className='flex self-center  text-yellow-100  ml-2 mr-2 '>Cat</Link>
                    </button>

                    <button className='p-3 m-5 bg-green-400 hover:bg-green-500 justify-center rounded-2xl border-black border ring-2 ring-yellow-950'>
                            <Link to='/fox' className='flex self-center  text-yellow-100 ml-2 mr-2 '>Fox</Link>
                    </button>
                    <button className='p-3 m-5 bg-green-400 hover:bg-green-500 justify-center rounded-2xl border-black border ring-2 ring-yellow-950'>
                            <Link to='/dashboard' className='flex self-center  text-yellow-100 ml-2 mr-2 '>Dashboard</Link>
                    </button>
                    <button className='p-3 m-5 bg-green-400 hover:bg-green-500 justify-center rounded-2xl border-black border ring-2 ring-yellow-950'>
                            <Link to='/myimg' className='flex self-center  text-yellow-100  ml-2 mr-2 '>My Images</Link>
                    </button>
                    <button className='p-3 m-5 bg-green-400 hover:bg-green-500 justify-center rounded-2xl border-black border ring-2 ring-yellow-950'>
                            <Link to='/about' className='flex self-center  text-yellow-100  ml-2 mr-2 '>About</Link>
                    </button>

                    {!isAuthenticated?
                    <button className='p-3 m-5 bg-green-400 hover:bg-green-500 justify-center rounded-2xl border-black border ring-2 ring-yellow-950'>
                        <Link to='/' className='flex self-center  text-yellow-100 ml-2 mr-2 ' onClick={signInOnClick}>Sign In</Link>
                    </button>
                    :
                    <button className='p-3 m-5 bg-green-400 hover:bg-green-500 justify-center rounded-2xl border-black border ring-2 ring-yellow-950'>
                        <Link to='/' className='flex self-center  text-yellow-100 ml-2 mr-2 ' onClick={signOutOnClick}>Sign Out</Link>
                    </button>
                    }


                    
                </div>
            </div>
            ) : (
            <></>
            ) }
        </nav>
      
  )
}

export default Navbar
