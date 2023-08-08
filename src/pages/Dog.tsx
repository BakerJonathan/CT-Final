import ImageToArrays from '../components/ImageToArrays'
import {RandImages} from '../api/RandImages'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

function Dog() {
  const [portalAid,setPortalAid]=useState<string[]>([]);

useEffect(()=>{
  {RandImages('https://random.dog/woof.json',15,true).then((value) => {
    if (value!=undefined)
        setPortalAid(value)
    })}
  },[])

  return (
    <div className='flex flex-row'>
          {createPortal(ImageToArrays(portalAid), document.body)} 
    </div>
  )
}

export default Dog
