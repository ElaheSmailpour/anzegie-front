import sellModelInterface from '../models/sellModel'
import getAxios from './baseApi'


export const sellApi=(body :sellModelInterface)=>{
    return getAxios().post("/sell/addSell" , body)
}

export const loginApi=(username:any, password:any)=> {
    return getAxios().post("/user/login", { username, password })
  }
 

  export const signupApi=(body:any)=> {
    return getAxios().post("/user/signup", body)
  }