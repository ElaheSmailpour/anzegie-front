import sellModelInterface from '../models/sellModel'
import getAxios from './baseApi'


export const sellApi=(body :sellModelInterface)=>{
    return getAxios().post("/sell/addSell" , body)
}

