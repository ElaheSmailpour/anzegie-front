import { makeStyles } from '@mui/styles';
import { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import { sellModelInterfacePopulate } from '../../models/sellModel';
import { getShopSellApi } from '../../servieApi/sellApi';

import SellCard from '../sellCard/SellCard';
const useStyles = makeStyles(() => ({
    Cardcontainer: {
        display: "Grid",
        gridTemplateColumns:"repeat(4,1fr)",
        gap: "7px",
        padding:"1rem"

    }
})) as any

const Home = () => {
    const classes = useStyles()
    const [data, setData] = useState<sellModelInterfacePopulate[]>([])

    useEffect(() => {
        getShopSellApi().then((res: AxiosResponse<sellModelInterfacePopulate[]>) => {
            setData(res.data)
        }).catch((err: any) => {
            console.log(err)
        })
    }, [])
    return (
        <div className={classes.Container} >
           
            <div className={classes.Cardcontainer}>
            {data.map((item,index)=>{
                return <SellCard key={index} sell={item} />
            })}
            </div>
        </div>
    )
}

export default Home