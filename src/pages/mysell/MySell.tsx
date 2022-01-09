
import { Box, Grid } from "@mui/material"
import { useEffect, useState } from "react"
import sellModelInterface from "../../models/sellModel"
import { getMySellApi } from "../../servieApi/sellApi"
import ShowMySell from "./ShowMySell"
const MySell = () => {
    const [mySellData, setMySellData] = useState<sellModelInterface[]>([])
    useEffect(() => {
        updateDataFuction()
    }, [])

    const updateDataFuction=()=>{
        getMySellApi().then((res) => {
            setMySellData(res.data)
        }).catch((err) => {
            if (err.response?.status===401)
            {
            window.location.assign("/login")
            localStorage.clear()
            }
            console.log("err getMySellApi=", err)
            
        })
    }
    return (
        <div>

            <Box p={5}>
                <Grid container spacing={5} >
                    {mySellData.map((item, i) => {
                        return <Grid item key={i}> <ShowMySell UpdateData={updateDataFuction} sell={item} /> </Grid>
                    })}
                </Grid>
            </Box>

        </div>
    )
}

export default MySell