import React, { useContext, useEffect } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Outlet, useNavigate } from 'react-router-dom';
import { UserContext } from '../../App';

export default function Layout() {
  
   const {user} = useContext(UserContext);
   const navigate = useNavigate();
    const ifUser = 
    user.displayName || 
    JSON.parse(localStorage.getItem("userDetails"))?.displayName;

    useEffect(()=>{
      if(!ifUser){
        navigate("/")
      }
    },[]);

  return (
    <div>
        <Header />
        <Outlet />
        <Footer />
    </div>
  )
}
