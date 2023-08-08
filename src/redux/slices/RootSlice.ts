import {createSlice} from '@reduxjs/toolkit'

const rootSlice=createSlice({
    name:"root",
    initialState:{
        url:'Url',
        prio:'Priority',
        user_id:'User ID'
    },
    reducers:{
        chooseUrl: (state,action)=>{state.url=action.payload},
        choosePrio: (state,action)=>{state.prio=action.payload},
    }
})

export const reducer=rootSlice.reducer
export const{chooseUrl,choosePrio}=rootSlice.actions