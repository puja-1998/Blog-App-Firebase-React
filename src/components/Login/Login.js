import { createUserWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { useContext, useEffect, useState } from 'react';
import { auth, googleAuthProvider } from '../../config/Firebase';
import './Login.css';
import Divider from '../Divider/Divider';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../App';

export default function Login() {

    //state for email and password
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Redirect to home page
    const navigate = useNavigate();
    const {user, setUser} = useContext(UserContext);
    useEffect(()=>{
        if(localStorage.getItem("displayName")){
            navigate('/home')
        }
    },[])

    //Login Function
    const handleLogin = async() =>{
    try{
       let res = await signInWithPopup(auth, googleAuthProvider);
        console.log(res, "user");

        let userDetails = {
            displayName: res.user.displayName,
            email: res.user.email,
            uid: res.user.uid,
        };
        setUser(userDetails);
        localStorage.setItem("userDetails", JSON.stringify(userDetails))
        navigate("/home");
        
    }catch(err){
        console.log("Error occured while logging in...", err);
        
    }
};


//Log Out Function
const handleLogOut = async()=>{
    try{
        await signOut(auth);

    }catch(err){
        console.error(err);
        
    }
};

//Sign In Function
const signIn = async () => {
    try {
    await createUserWithEmailAndPassword(auth,email,password);
    } catch (err){
      console.error(err);
    }
  };


  return (
    <div className="main">
        <div className='container'>
        <h1>Welcome to our Blog App</h1>

        <div className="inputdiv">
            <div className="email">
                <label htmlFor="Email">Email:</label>
                <input placeholder="Email.." onChange={(e) => setEmail(e.target.value)} />
            </div>

           <div className="pass">
                <label htmlFor="password">Password:</label>
                <input
                
                    type="password"
                    placeholder="Password.."
                    onChange={(e) => setPassword(e.target.value)}
                />
           </div>
        </div>

        <div className="login-logout">
            <button onClick={signIn} style={{backgroundColor:"green"}}> Sign In</button>
            <button onClick={handleLogOut} style={{backgroundColor:"red"}}>LogOut</button>
        </div>
        <Divider/>
        <button onClick={handleLogin} style={{backgroundColor:"orange"}}>SignIn With Google</button>
    </div>
    </div>
  )
}
