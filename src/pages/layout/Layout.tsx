import { Route, Routes } from 'react-router-dom';
import Header from '../../header/Header';
import TopHeader from '../../header/TopHeader';
import Sell from '../sell/Sell';
import Signup from '../signup/Signup';
import Home from "../home/Home"
import  Login  from "../login/Login"
const Layout = () => {
    return (
        <div>
            <TopHeader />
            <Header />
            <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/sell" element={<Sell/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/"  element={<Home />}></Route>
            </Routes>
        </div>
    )
}


export default Layout