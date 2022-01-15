
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import  { sellModelInterfacePopulate } from '../../models/sellModel';

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


interface SellCardProps {
    sell : sellModelInterfacePopulate,
    
}


const SellCard :React.FC<SellCardProps>= ({sell})=> {
    const classes = useStyles()
 
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
          
              
                
            </CardActions>
        </Card>
        </Link>

    );
}
export default SellCard