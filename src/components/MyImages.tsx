import { useGetData } from '../custom-hooks/FetchData'
import { server_calls } from '../api/server'
import { useState } from 'react'
import ModalInfo from './ModalInfo'

function MyImages() {    
    let [open,setOpen]=useState(false)
    const handleClose=()=>{setOpen(false)}
    let [url4modal,setUrl]=useState("")
    let [prio4modal,setPrio]=useState("")

    const {imgData,getData}=useGetData()
    const deleteData = async (delId:string) => {
        server_calls.delete(delId)
        getData();
        console.log(`Deleted ID: ${delId}`)
        setTimeout(()=>{window.location.reload()},500)
    }

  return (
    <div className='flex flex-row flex-wrap justify-center px-2 pb-10 bg-green-700 min-h-screen'>
        <ModalInfo open={open} onClose={handleClose} elem={<h2 className='text-green-700'>Url: {url4modal}<br/>Prio: {prio4modal}</h2>}/>

        {imgData.map(imgData=>(
          <div className='p-3 flex flex-col' key={imgData['entry_id']}>
            <div className='flex flex-row self-center'>
            <button onClick={()=>{deleteData(imgData['entry_id'])}} 
            className='px-2 m-2 bg-yellow-600  hover:bg-yellow-500  rounded-2xl w-auto border border-black ring-4 ring-green-900'>Del Url</button>
           
            <button onClick={()=>{setUrl(imgData['url']);setPrio(imgData['prio']); setOpen(true) }}
            className='px-2 m-2 bg-yellow-600  hover:bg-yellow-500  rounded-2xl w-auto border border-black ring-4 ring-green-900'>Get Url</button>
            </div>
            <img src={imgData['url']} className='object-contain h-96 w-96'  alt="" >

            </img>
          </div>
        ))}

    </div>
  )
}

export default MyImages
