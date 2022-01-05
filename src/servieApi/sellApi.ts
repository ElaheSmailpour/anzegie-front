

import loginResponseModelInterface from '../models/loginResponse'
import userModelInteface from '../models/userModel'
import getAxios from './baseApi'


export const sellApi=(body :FormData)=>{
    return getAxios().post("/sell/addSell" , body)
}

export const loginApi=(username:string, password:string)=> {
    return getAxios().post<loginResponseModelInterface>("/user/login", { username, password })
  }
 

  export const signupApi=(body:any)=> {
    return getAxios().post<userModelInteface>("/user/signup", body)
  }
  

  export const addcategoryApi=()=> {
    return getAxios().get("/category/getcategory", )
  }