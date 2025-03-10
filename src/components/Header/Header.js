import React, { useContext } from 'react';
import './Header.css';
import { UserContext } from '../../App';
import { Link } from 'react-router-dom';

export default function Header() {

  const {user, setUser} = useContext(UserContext);
  const nameInitials = 
  user.displayName || 
  JSON.parse(localStorage.getItem("userDetails"))
  ?.displayName
  .split(" ")
  .map((word)=>word[0])
  .join("");
  
  return (
    <div className='header-container'>
        <h1>Blog App</h1>

        <div className="header-list">
        <ul className='nav-list'>
            <Link to= '/home'><li> <button className='btn'>Home</button></li></Link>
            <Link to= '/create'><li><button className='btn'>Create</button></li></Link>
        </ul>
        <div className='user-name'>{nameInitials}</div>
        </div>
        
    </div>
  )
}
