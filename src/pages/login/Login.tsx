/*
import { loginApi } from "../../servieApi/sellApi"

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useState } from 'react';
*/
const Login = () => {
    /*
    const [error, setError] = useState("")
    const [login, setLogin] = useState({
        username: "",
        password: ""
    })

    const HandleLogin = (event) => {
        const newLogin = { ...login, [event.target.name]: event.target.value }
        setLogin(newLogin)
    }

    const HandleSubmit = () => {

        loginApi(login.username, login.password).then(res: any => {

            toast.success("login");
            localStorage.setItem("adminToken", res.data.token)
            localStorage.setItem("username", login.username)
            window.location.assign("/managetermin");

        }).catch(err: any => {
            setError("find not User!")

            console.log("errorTerminService=", err)
        })
    }

*/

    return (
        <div className="login">
            
            {/* <div className="login-Content">
                <h1>Login</h1>
                <lable>Username: <input type="text" value={login.username} name="username" placeholder="username" onChange={HandleLogin} /></lable>
                <lable>Password:<input type="password" value={login.password} name="password" placeholder="password" onChange={HandleLogin} /></lable>
                <button onClick={HandleSubmit}>login</button>

            </div>
            {error && <div className="showError">
                <p>{error}</p>
            </div>} */}
        </div>
    )
}


export default Login;

