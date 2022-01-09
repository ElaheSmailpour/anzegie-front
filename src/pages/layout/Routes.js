import Sell from '../sell/Sell';
import { Navigate } from 'react-router-dom';
import Home from '../home/Home';
import Login from '../login/Login';
import DetailsMySell from '../mysell/DetailsMySell';
import MySell from '../mysell/MySell';
import Signup from '../signup/Signup';
import EditMySell from '../mysell/EditMySell';

const routes = (isLoggedIn) => [


    {
        path: '/detailSell/:id',
        element: <DetailsMySell/> 

    },
    
    {
        path: '/login',
        element: <Login/> 

    },
    {
        path: '/signup',
        element: <Signup/> 

    },
    {
        path: '/',
        element: <Home/> 

    },

    {
        path: '/sell',
        element: isLoggedIn ? <Sell/> : <Navigate to="/login"/>
    
  },
    {
        path: '/mySell',
        element: isLoggedIn ? <MySell/> : <Navigate to="/login"/>
    
  },

  {
    path: '/editSell/:id',
    element: isLoggedIn ?   <EditMySell/>  : <Navigate to="/login"/>
  

},
];

export default routes;
