import { Route, Routes } from 'react-router-dom';
import Header from '../../header/Header';
import TopHeader from '../../header/TopHeader';
import Sell from '../sell/Sell';

const Layout = () => {
    return (
        <div>
            <TopHeader />
            <Header />
            <Routes>
            <Route path="/sell" element={<Sell/>}/>
            </Routes>
        </div>
    )
}


export default Layout