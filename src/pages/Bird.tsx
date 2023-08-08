import ImageToArrays from '../components/ImageToArrays'
import {RandImages} from '../api/RandImages'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

function Bird() {
  const [portalAid,setPortalAid]=useState<string[]>([]);

useEffect(()=>{
  {RandImages('https://shibe.online/api/birds?count=15&urls=true&httpsUrls=true',1,false).then((value) => {
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

export default Bird
