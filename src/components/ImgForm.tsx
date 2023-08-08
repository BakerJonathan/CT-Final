import Input from "./Input"
import { useForm } from 'react-hook-form'
import {server_calls} from '../api/server'
import { useDispatch, useStore } from "react-redux"
import {chooseUrl, choosePrio} from '../redux/slices/RootSlice'
import getUser from "../auth/getUser"

interface ImgFormProps{
    entry_id?:string[]
    onClose:()=>void
}

function ImgForm(props:ImgFormProps) {
  const user=getUser()

  const {register,handleSubmit}=useForm({})
  const dispatch=useDispatch()
  const store=useStore()

  const onSubmit=(data:any, event:any)=>{
      console.log(`ID: ${typeof props.entry_id}`)
      console.log(props.entry_id)
      console.log(data)
      if (props.entry_id && props.entry_id.length>0){
          data.user_id=user
          server_calls.update(props.entry_id[0],data)
          console.log(`Updated: ${props.entry_id}`)
          setTimeout(()=>{window.location.reload()},1000);
          event.target.reset()}else{
              dispatch(chooseUrl(data.url))
              dispatch(choosePrio(data.prio))
              if (!user){
                server_calls.create(store.getState(),"undefined")

              }else{
              server_calls.create(store.getState(),user)}
              setTimeout(()=>{window.location.reload()},1000);
              event.target.reset()
          }
      }

  return (
    <div className="w-4/5">
    <form onSubmit={handleSubmit(onSubmit)}>
     <div>
        <label htmlFor="url">Url</label>
        <Input {...register('url')} name='url' placeholder="Url" />
      </div>
      <div>
        <label htmlFor="prio">Prio</label>
        <Input {...register('prio')} name='prio' placeholder="Prio (Numeric, no decimals)" />
      </div>
      <div>
        <button type='submit' className='p-3 m-5 bg-gray-400 hover:bg-gray-500 justify-center rounded-2xl text-white'>
          Submit
        </button>
      </div>
    </form>
  </div>
  )
}

export default ImgForm
