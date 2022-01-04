import { signupApi } from "../../servieApi/sellApi"
import { useState } from "react"
import { Button, FormControl, FormLabel, TextField } from "@mui/material"
import { makeStyles } from '@mui/styles';
//import { useNavigate } from 'react-router-dom';
const useStyles = makeStyles(() => ({
    container: {
        display: "flex",
        flexDirection: "column",
        gap: "7px"

    }
})) as any

const Signup = () => {
    const classes = useStyles()
  //  const navigate=useNavigate()
    const [form, setForm] = useState({
        name: "",
        phone: "",
        password: "",
        repeatPassword: "",
        email: ""
    })



    const Regestrieren = (event: any) => {
        event.preventDefault()
        if (form.password !== form.repeatPassword) {
            alert("password is not equal repeatpassword")
            return;

        }
        if (!form.password) {
            alert(" enter your password ")
            return;

        }
        const addsignup = {
            name: form.name,
            password: form.password,
            email: form.email,
            phone: form.phone
        }

        signupApi(addsignup).then((res) => {
            alert("signup submitted successfully")
            //  navigate("/")
        }).catch((error) => {

            console.log(error);
        })
    }

    const handleChangeForm = (e: any) => {
        console.log(e.target, e.target.name)

        const newForm = { ...form } as any
        newForm[e.target.name] = e.target.value;
        setForm(newForm);
    }
    return (
      
            <form className={classes.container} onSubmit={Regestrieren}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Name</FormLabel>
                        <TextField fullWidth label="name" name="name" value={form.name} onChange={e => handleChangeForm(e)} />
                    </FormControl>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Phone</FormLabel>
                        <TextField fullWidth label="phone" name="phone" value={form.phone} onChange={e => handleChangeForm(e)} />
                    </FormControl>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Password:</FormLabel>
                        <TextField type="password" fullWidth label="password" name="password" value={form.password} onChange={e => handleChangeForm(e)} required />
                    </FormControl>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">RepeatPassword</FormLabel>
                        <TextField type="password" fullWidth label="repeatPassword" name="repeatPassword" required value={form.repeatPassword} onChange={e => handleChangeForm(e)} />
                    </FormControl>

                    <FormControl component="fieldset">
                        <FormLabel component="legend">Email</FormLabel>
                        <TextField fullWidth label="email" name="email" value={form.email} onChange={e => handleChangeForm(e)} />
                    </FormControl>
                    <Button type="submit">Regestrieren</Button>

            </form>
       
    )
}
export default Signup