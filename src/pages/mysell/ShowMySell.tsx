
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import sellModelInterface from '../../models/sellModel';
import { removeSellApi } from '../../servieApi/sellApi';
import React from 'react';
import { Link } from 'react-router-dom';
const useStyles = makeStyles(() => ({
    root: {
        maxWidth: 345,

    },
    media: {
        height: 140,
    }
}))


interface ShowMySellProps {
    sell : sellModelInterface,
    UpdateData:()=>void
}


const ShowMySell :React.FC<ShowMySellProps>= ({sell,UpdateData})=> {
    const classes = useStyles()
    const removeMySell = () => {
        removeSellApi(sell._id).then((res: any) => {
            alert("remove successfully!")
            UpdateData()
        }).catch((err: any) => {
         
            console.log("error removeMySell=", err)
        })
    }
    return (

        <Link to={`/detailSell/${sell._id}`}>   <Card style={{ maxWidth: 345 }} className={classes.root}>
           <CardMedia
                component="img"
                height="140"
                image={sell.images[0]}
                alt="pic"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {sell.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {sell.price}
                </Typography>
            </CardContent>
            <CardActions>
            <Link to={`/editsell/${sell._id}`}> <Button size="small" >Edit Mysell</Button></Link>
              
                <Button onClick={removeMySell}   size="small">Remove</Button>
            </CardActions>
        </Card>
        </Link>

    );
}
export default ShowMySell