import { Route, Routes } from 'react-router-dom';
import Header from '../../header/Header';
import TopHeader from '../../header/TopHeader';
import Sell from '../sell/Sell';
import Signup from '../signup/Signup';
import Home from "../home/Home"
import  Login  from "../login/Login"
import React from 'react';
const Layout = () => {
    return (
        <div>
            <TopHeader />
            <Header />
            <Routes>
            <Route path="/login" element={<Login/>}/>
            {/* <PrivateRoute path='/sell' element={<Sell/>}></PrivateRoute>  */}
            <Route path="/sell" element={<Sell/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/"  element={<Home />}></Route>
            </Routes>
        </div>
    )
}


export default Layout
/*
const isAuth = () => !!localStorage.getItem("userToken");
const PrivateRoute = ({element,...props}) => {
    return <Route {...props} render={() => {
      // if token ist da  bestimmte component rendern
        if (isAuth())
            return React.createElement(element)
        else return <Redirect to={"/login"}/>
    }}/>
}
*/