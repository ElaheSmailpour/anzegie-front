import { Route, Routes } from 'react-router-dom';
import Header from '../../header/Header';
import TopHeader from '../../header/TopHeader';
import Sell from '../sell/Sell';
import Signup from '../signup/Signup';

const Layout = () => {
    return (
        <div>
            <TopHeader />
            <Header />
            <Routes>
            <Route path="/sell" element={<Sell/>}/>
            <Route path="/signup" element={<Signup/>}/>
            {/* <Route path="/" element={<Layout/>}/> */}
            </Routes>
        </div>
    )
}


export default Layout