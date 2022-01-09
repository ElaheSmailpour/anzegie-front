
import {  useState } from 'react';
import { useRoutes } from 'react-router-dom';
import Header from '../../header/Header';
import TopHeader from '../../header/TopHeader';
import routes from './Routes';



const Layout = () => {
    const [isAuth] = useState(!!localStorage.getItem("userToken"))
  
    console.log("isAuth=", isAuth)
    const routing = useRoutes(routes(isAuth));
  
    return (
        <div>
            <TopHeader />
            <Header />
            {routing}

        </div>
    )
}


export default Layout


