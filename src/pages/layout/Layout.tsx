import { Route, Routes } from 'react-router-dom';
import Header from '../../header/Header';
import TopHeader from '../../header/TopHeader';
import Sell from '../sell/Sell';
import Signup from '../signup/Signup';
import Home from "../home/Home"
import Login from "../login/Login"
import React from 'react';
import MySell from '../mysell/MySell';
import DetailsMySell from '../mysell/DetailsMySell';


const Layout = () => {

    return (
        <div>
            <TopHeader />
            <Header />

            <Routes>
                <Route path="/detailSell/:id" element={<DetailsMySell />} />
                <Route path="/login" element={<Login />} />
          
                <Route path="/sell" element={<Sell />} />
                <Route path="/mySell" element={<MySell />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/" element={<Home />}></Route>

            </Routes>
           
        </div>
    )
}


export default Layout

// const isAuth = () => !!localStorage.getItem("userToken");
// const PrivateRoute: React.FC<any> = ({ element, ...props }) => {
//     return <Routes><Route {...props} element={isAuth()?  React.createElement(element) : <Login/>} /></Routes>
// }
