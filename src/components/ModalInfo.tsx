import { ReactElement } from "react";

type Props={
    elem:ReactElement
    open:boolean; 
    onClose:()=>void;}
const ModalInfo=(props:Props, )=> {
    if (!props.open) return (<></>)
    return(
        <div onClick={ props.onClose } className='fixed w-full h-auto flex overflow-auto z-1 justify-center align-middle  '>
        <div className=' w-8/12 h-200 fixed flex z-1 mt-48 bg-white shadow-xl rounded flex-col border border-black border-l' onClick={(e) => {e.stopPropagation()}}>
            <button className="mt-10 mx-20 bg-gray-400 hover:bg-gray-500 justify-center rounded-2xl w-1/12 text-white " onClick={props.onClose}>
                X
            </button>
            <div className="flex flex-col items-center text-center mt-3 p-2 ">
                {props.elem}
            </div>
        </div>
    </div>
    )
}

export default ModalInfo
