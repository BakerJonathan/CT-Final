import { useState, useEffect } from "react";
import { server_calls } from "../api/server";
import getUser from "../auth/getUser";

export const useGetData=()=>{
    const [imgData,setData]=useState<[]>([])
    const user=getUser()

    async function handleDataFetch(){
        const result=await server_calls.get(user!)

        setData(result)
    }
    useEffect(()=>{
        handleDataFetch()
    },[])
    return{imgData, getData:handleDataFetch}
}