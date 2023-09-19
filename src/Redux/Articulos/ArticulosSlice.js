import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({

    name:'Articulos',
    initialState:{
        listArticulo:[],
        error:null,
    },
    reducers:{
        getArticulo:(state , action)=>{
            
            state.listArticulo=action.payload
        },
        getErro:(state,action) =>{
            state.error= action.payload
        }
        
    }
})

export const{getArticulo,getErro}=slice.actions

export default slice.reducer