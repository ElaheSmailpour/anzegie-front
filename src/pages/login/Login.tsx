
import { loginApi } from "../../servieApi/sellApi"
import { Button, FormControl, FormLabel, TextField } from "@mui/material"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useState } from 'react';

const Login = () => {
    
    const [error, setError] = useState("")
    const [login, setLogin] = useState({
        username: "",
        password: ""
    })

    const HandleLogin = (event:any) => {
        const newLogin = { ...login, [event.target.name]: event.target.value }
        setLogin(newLogin)
    }

    const HandleSubmit = () => {

        loginApi(login.username, login.password).then((res )=> {

            toast.success("login");
            localStorage.setItem("userToken", res.data.token)
            localStorage.setItem("username", res.data.username)
            window.location.assign("/sell");

        }).catch((err: any) => {
            setError("find not User!")

            console.log("errorTerminService=", err)
        })
        
    }



    return (
        <div className="login">
            
             <div className="login-Content">
                <h1>Login</h1>
                <FormControl component="fieldset">
                        <FormLabel component="legend">Username</FormLabel>
                        <TextField fullWidth label="username" name="username" placeholder="username" value={login.username} onChange={HandleLogin} />
                    </FormControl>
               <FormControl component="fieldset">
                        <FormLabel component="legend">Password</FormLabel>
                        <TextField type="password" fullWidth label="password" name="password" placeholder="password" value={login.password} onChange={HandleLogin} />
                    </FormControl>
               <Button onClick={HandleSubmit}>login</Button>
                
          
          
            </div>
        </div>
    )
}


export default Login;

