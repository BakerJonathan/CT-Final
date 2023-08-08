import  {useState} from 'react'
import Modal from "./Modal"
import { server_calls } from '../api/server'

import {DataGrid,GridColDef} from '@mui/x-data-grid'
import { useGetData } from '../custom-hooks/FetchData'


const columns: GridColDef[]=[
    { field: 'entry_id', headerName: "Entry ID", width: 90, hide:true},
    {field:'url', headerName: 'Image Url',flex:3},
    {field:'prio', headerName: 'Image Priority',flex:1},
    {field:'user_id', headerName: 'User ID', hide:true}
]


function DataTable() {
  let [open,setOpen]=useState(false)
  const {imgData,getData}=useGetData()
  const[selectionModel,setSelectionModel]=useState<string[]>([])
  

  const handleOpen=()=>{setOpen(true)}
  const handleClose=()=>{setOpen(false)}
  const deleteData = async () => {
      server_calls.delete(selectionModel[0])
      getData();
      console.log(`Selection model: ${selectionModel}`)
      setTimeout(()=>{window.location.reload()},500)
  }


  return (
    <>
      <Modal open={open} onClose={handleClose} entry_id={selectionModel}/>

      <div className='flex flex-row text-yellow-800 bg-green-700 justify-center py-7'>
        <button onClick={()=>handleOpen()} className='p-3 m-3 rounded-xl bg-yellow-600  hover:bg-yellow-500 border border-black text-yellow-50 mx-10 ring-4 ring-green-900'>Add Image</button>
        <button onClick={handleOpen} className='p-3 m-3 rounded-xl bg-yellow-600  hover:bg-yellow-500 border border-black text-yellow-50 mx-10 ring-4 ring-green-900'>Change Image</button>
        <button onClick={deleteData} className='p-3 m-3 rounded-xl bg-yellow-600  hover:bg-yellow-500 border border-black text-yellow-50 mx-10 ring-4 ring-green-900'>Delete Image</button>
      </div>
      <div className={open?"hidden":'flex flex-col  '} style={{ height: 600, width: '80%'}}>
          <DataGrid rows={imgData}  getRowId={(row) => row.entry_id} columns={columns} rowsPerPageOptions={[5]}
              sx={{left:'10%', color:'black', bgcolor:'white'}}
              checkboxSelection={true} 
              onSelectionModelChange={ (item:any) => {setSelectionModel(item)}}
              />
      </div>
    </>
  )
}

export default DataTable
