import { getArticulo, getErro} from "./ArticulosSlice";

export function GetArticulo(lista){
    return async dispatch =>{
        try {
            
           
           dispatch(getArticulo(lista))
           console.log("redux",lista)
          } catch (error) {
            dispatch(getErro(error))
            console.log(error)
          }

    }
}