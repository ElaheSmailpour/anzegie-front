

import loginResponseModelInterface from '../models/loginResponse'
import sellModelInterface from '../models/sellModel'
import userModelInteface from '../models/userModel'
import getAxios from './baseApi'


export const sellApi=(body :FormData)=>{
    return getAxios().post("/sell/addSell" , body)
}
export const detailsSellApi=(id:string)=>{
  return getAxios().get<sellModelInterface>(`/sell/detailSell/${id}`)
 
}

export const loginApi=(username:string, password:string)=> {
    return getAxios().post<loginResponseModelInterface>("/user/login", { username, password })
  }
 

  export const signupApi=(body:any)=> {
    return getAxios().post<userModelInteface>("/user/signup", body)
  }
  

  export const addcategoryApi=()=> {
    return getAxios().get("/category/getcategory" )
  }
  
  export const getMySellApi=()=> {
    return getAxios().get("/sell/getMySell" )
  }

  export const removeSellApi = (id:any) => {
    return getAxios().delete(`/sell/removeSell/${id}`)

}

export const editMySellApi=(id:any,body:FormData)=> {
  return getAxios().put(`/sell/editSell/${id}`,body )
}



export const getShopSellApi=()=> {
  return getAxios().get(`/shop/getShop` )
}


export const addcartApi=(body:{sell:string,count:number})=> {
  return getAxios().post<void>("/shop/addcart", body)
}



export const getCartApi=()=> {
  return getAxios().get(`/shop/getCart` )
}