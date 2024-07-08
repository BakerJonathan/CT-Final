import ImageToArrays from '../components/ImageToArrays'
import {RandImages} from '../api/RandImages'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

function Cat() {
  const [portalAid,setPortalAid]=useState<string[]>([]);

  useEffect(()=>{
    {RandImages('https://api.thecatapi.com/v1/images/search?limit=10',1, 2 ).then((value) => {
      // TheCatApi is freemium with limit of 10 per query for free. Which arrives as 9 for some reason, hence why cat page is 9 long. For now.
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

export default Cat
