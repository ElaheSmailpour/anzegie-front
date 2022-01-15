

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { sellModelInterfacePopulate } from '../../models/sellModel';
import { addcartApi, detailsSellApi } from '../../servieApi/sellApi';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import { Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const useStyles = makeStyles(() => ({
    root: {
        maxWidth: 345,

    },
    media: {
        height: 140,
    },
    container: {
        display: "flex",
        gap: "4rem"
    },
    imageContainer: {
        display: "grid",
        gridTemplateColumns: "max-content max-content max-Content",
        gap: "6rem"
    },
    imgStyle: {
        width: "200px"
    }
}))



const DetailsMySell = () => {
    const classes = useStyles()
    const [data, setData] = useState<sellModelInterfacePopulate>()
    const [SelectCount, setSelectCount] = useState<number>()
    const { id } = useParams()
    useEffect(() => {
        detailsSellApi(id || "").then((res: any) => {
            setData(res.data)
        }).catch((err: any) => {
            console.log("error detailsSellApi=", err)
        })
    }, [id])
    if (!data)
        return <p>Loading!...</p>
    const handleClickBuy = () => {
        addcartApi({ sell:data._id || "",count:SelectCount || 0 }).then((res: any) => {
            alert("addcart successfully")
        }).catch((err: any) => {
            console.log("err with addcart=",err)
        })
    }

    const handleForm = (event: any) => {
        console.log("event.target.value=",event.target.value)
        setSelectCount(event.target.value)
    }
    return (
        <div className={classes.container} >

            <Card style={{ maxWidth: 345 }} className={classes.root}>

                <CardMedia
                    component="img"
                    height="140"
                    image={data.images[0]}
                    alt="pic"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {data.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {data.price}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {data.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {data.phone}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {data.selltype}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {data.category.name}
                    </Typography>

                </CardContent>
                <CardActions>

                </CardActions>
            </Card>
            <div className={classes.imageContainer}>
                {data.images.map((item, index) => {
                    return <img className={classes.imgStyle} key={index} src={item} alt="pic" />
                })}
            </div>

            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Count</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    name="count"
                    value={SelectCount}
                    label="count"
                    onChange={handleForm}
                >
                    {new Array(10).fill(".").map((item, index) => <MenuItem value={index}>{index}</MenuItem>)}

                </Select>
            </FormControl>

            <Button onClick={handleClickBuy} size="small">Buy</Button>
        </div>


    );
}
export default DetailsMySell