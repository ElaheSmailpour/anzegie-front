import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Button, IconButton, Input, InputLabel, MenuItem, Select, TextareaAutosize, TextField } from '@mui/material';
import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { PhotoCamera } from '@material-ui/icons';
import sellModelInterface, { ELocationType, ESellType } from '../../models/sellModel';
import { sellApi } from '../../servieApi/sellApi';
const useStyles = makeStyles(() => ({
    container: {
        display: "flex",
        flexDirection: "column",
        gap: "7px"

    }
})) as any

const Sell = () => {

    const classes = useStyles()

    const [form, setForm] = useState<sellModelInterface>({
        category: "",
        description: "",
        image: "",
        locationType: ELocationType.PRIVATE,
        price: 0,
        title: "",
        name: "",
        phone: "",
        selltype: ESellType.REQUEST
    })

    const handleForm = (event: any) => {
        const newForm = { ...form } as any
       
        newForm[event.target.name] = event.target.value
        setForm(newForm)
    }
    const handelclickSell=()=>{
       
        sellApi(form).then((res:any)=>{

        }).catch((err:any)=>{
            console.log("err=",err)
        })
    }
    return (
        <div className={classes.container}>
            <h1>to Sell</h1>
            <FormControl component="fieldset">
                <FormLabel component="legend">Request/Bid</FormLabel>
                <RadioGroup row aria-label="gender" name="selltype" value={form.selltype} onChange={handleForm}>
                    <FormControlLabel value="request" control={<Radio />} label="request" />
                    <FormControlLabel value="bid" control={<Radio />} label="bid" />
                </RadioGroup>
            </FormControl>
            <FormControl component="fieldset">
                <FormLabel component="legend">Title</FormLabel>
                <TextField fullWidth label="title" name="title" value={form.title} onChange={handleForm} />
            </FormControl>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    name="category"
                    value={form.category}
                    label="bag"
                    onChange={handleForm}
                >
                    <MenuItem value={10}>bag</MenuItem>
                    <MenuItem value={20}>accessorie</MenuItem>

                </Select>
            </FormControl>
            <FormControl component="fieldset">
                <FormLabel component="legend">price</FormLabel>
                <TextField type="nummber" fullWidth label="price" name="price" value={form.price} onChange={handleForm} />
            </FormControl>
            <FormControl component="fieldset">
                <FormLabel component="legend">Description</FormLabel>
                <TextareaAutosize
                    aria-label="empty textarea"
                    placeholder="Empty"
                    style={{ width: 200 }}
                    name="description"
                    value={form.description}
                    onChange={handleForm}
                />
            </FormControl>
            <label htmlFor="icon-button-file">
                <Input id="icon-button-file" type="file" />
                <IconButton color="primary" aria-label="upload picture" component="span">
                    <PhotoCamera />
                </IconButton>
            </label>
            <h2>Location</h2>
            <FormControl component="fieldset">
                <FormLabel component="legend">Private/commercial</FormLabel>
                <RadioGroup row aria-label="gender" name="locationType" value={form.locationType} onChange={handleForm}>
                    <FormControlLabel value="private" control={<Radio />} label="private" />
                    <FormControlLabel value="commercial" control={<Radio />} label="commercial" />
                </RadioGroup>
            </FormControl>
            <FormControl component="fieldset">
                <FormLabel component="legend">Name</FormLabel>
                <TextField fullWidth label="name" name="name" value={form.name} onChange={handleForm} />
            </FormControl>
            <FormControl component="fieldset">
                <FormLabel component="legend">Phone</FormLabel>
                <TextField fullWidth label="phone" name="phone" value={form.phone} onChange={handleForm} />
            </FormControl>
            <h2>Publish your ad</h2>
            <Button onClick={handelclickSell} variant="contained">to Sell</Button>

        </div>
    )
}


export default Sell