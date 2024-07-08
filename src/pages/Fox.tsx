import ImageToArrays from '../components/ImageToArrays'
import {RandImages} from '../api/RandImages'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

function Fox() {
  const [portalAid,setPortalAid]=useState<string[]>([]);

useEffect(()=>{
  {RandImages('https://randomfox.ca/floof/',15,4).then((value) => {
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

export default Fox
