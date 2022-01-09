

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import sellModelInterface from '../../models/sellModel';
import { detailsSellApi } from '../../servieApi/sellApi';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';

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
    imgStyle:{
        width:"200px"
    }
}))



const DetailsMySell = () => {
    const classes = useStyles()
    const [data, setData] = useState<sellModelInterface>()
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

                </CardContent>
                <CardActions>

                </CardActions>
            </Card>
            <div className={classes.imageContainer}>
                {data.images.map((item, index) => {
                    return <img className={classes.imgStyle} key={index} src={item} alt="pic" />
                })}
            </div>
        </div>


    );
}
export default DetailsMySell