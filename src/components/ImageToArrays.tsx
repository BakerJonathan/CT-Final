import getUser from '../auth/getUser';
import { server_calls } from '../api/server';
import ModalInfo from './ModalInfo';
import { useState } from 'react';

// Fills in the div with images from url of array
//This includes onclick mechanics

function ImageToArrays(  urlArr:Array<string>) {
  let [open,setOpen]=useState(false)
  const handleClose=()=>{setOpen(false)}
  let [url4modal,setUrl]=useState("")
  
  const user=getUser()
  
  const addData = async (data:any={},user:string) => {
      server_calls.create(data,user)
      console.log(`Added url: ${data['url']}`)
  }

  return (
   <div className='flex flex-row flex-wrap justify-center p-2 pb-10 bg-green-700 min-h-screen'>
    
        <ModalInfo open={open} onClose={handleClose} elem={<h2 className='text-black truncate'>Added Url: {url4modal}</h2>}/>


        {urlArr.map(url=>(
          <div className=' p-3 flex flex-col' key={url}>
            <button onClick={()=>{addData({"url":url,"prio":100},user!)
              setUrl(url)
              setOpen(true)
            }}
            className='px-2 m-2 bg-yellow-600  hover:bg-yellow-500 self-center justify-center rounded-2xl w-auto border border-black ring-4 ring-green-900'>Add Url</button>
            <img src={url} className=' object-contain h-96 w-96 '  alt="" >
            </img>
          </div>
        ))}
        <div className='w-full flex flex-row flex-wrap justify-center p-2 pb-10 bg-green-700'>
        <button onClick={()=>window.location.reload()} 
          className=' px-2 m-2 bg-yellow-600  hover:bg-yellow-500 self-center justify-center rounded-2xl w-auto border border-black ring-4 ring-green-900'>Randomize</button>
          </div>
    </div>
  )
}

export default ImageToArrays
