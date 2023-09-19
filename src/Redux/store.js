import { configureStore } from "@reduxjs/toolkit";
import ArticulosReduce from "./Articulos/ArticulosSlice"

export default configureStore({

    reducer:{
        Articulos:ArticulosReduce
    },
    devTools:true
})