import { useEffect, useState } from "react"
import { interfaceCart } from "../../models/sellModel"
import { addcartApi, getCartApi } from "../../servieApi/sellApi"
import { makeStyles } from '@mui/styles';
import { FormControl, IconButton, InputLabel, MenuItem, Select } from "@mui/material";
import { Link } from "react-router-dom";

const useStyles = makeStyles(() => ({
    table: {
        width: "100%",
        borderCollapse: "collapse"
    },
    tableRow: {
        borderBottom: "1px red solid",
        padding: "2rem"
    },
    tableTh:{
        borderBottom: "1px red solid",
        padding: "2rem"
    }

}))


const Cart = () => {

    const [data, setData] = useState<interfaceCart[]>([])
    const classes = useStyles()
    useEffect(() => {
        updateData()
    }, [])

    const updateData = () => {
        getCartApi().then((res: any) => {
            setData(res.data)
        }).catch((err: any) => {
            console.log("error getCartApi=", err)
        })
    }
    const handleChangeCount = (event: any, item: interfaceCart) => {
        addcartApi({ sell: item.sell._id || "", count: event.target.value || 0 }).then((res: any) => {
            updateData()

            // item.count = event.target.value
            // const newData = data.map((itemValue, index) => {
            //     if (itemValue._id === item._id)
            //         return { ...itemValue, count: event.target.value }
            //     else
            //         return itemValue
            // })
            // setData(newData)
        }).catch((err: any) => {
            console.log("err with addcart=", err)
        })
    }
    const removeCart = (id: string) => {
        addcartApi({ sell: id, count: 0 }).then((res: any) => {
            updateData()

        }).catch((err: any) => {
            console.log("err with addcart=", err)
        })
    }
    return (
        <div>
            <table className={classes.table}>
                <thead>

                    <tr>
                        <th className={classes.tableTh}>EliShop</th>
                        
                        <th className={classes.tableTh}>Details</th>
                        <th className={classes.tableTh}>Count</th>
                        <th className={classes.tableTh}>Total Price</th>
                        <th className={classes.tableTh}>Remove</th>

                    </tr>

                </thead>
                {data.map((item, index) => {
                    return <tr key={index} >
                                <td className={classes.tableRow}><Link to={`/detailSell/${item.sell._id}`}><img width={"100px"} src={item.sell.images[0]} alt="pic" /></Link></td>
                        <td className={classes.tableRow}>{item.sell.title} {item.sell.price}</td>
                        <td className={classes.tableRow}>

                            <FormControl >
                                <InputLabel id="demo-simple-select-label">Count</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    name="count"
                                    value={item.count}
                                    label="count"
                                    onChange={(e) => handleChangeCount(e, item)}
                                >
                                    {new Array(10).fill(".").map((item, index) => <MenuItem value={index}>{index}</MenuItem>)}

                                </Select>
                            </FormControl>
                        </td>
                        <td className={classes.tableRow}>{item.count * item.sell.price}</td>
                        <td className={classes.tableRow}><IconButton onClick={() => removeCart(item.sell._id || "")}>[X]</IconButton></td>

                    </tr>
                })}
            </table>
            <div>
                sum: {data.reduce((acc: number, item: interfaceCart) => acc + item.count * item.sell.price, 0)}
            </div>

        </div>
    )
}

export default Cart