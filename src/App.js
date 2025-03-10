
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Login from './components/Login/Login';
import Layout from './components/Layout/Layout';
import BlogList from './components/BlogList/BlogList';
import CreateCard from './components/CreateCard/CreateCard';
import { createContext, useState } from 'react';
// import Header from "./components/Header/Header";
// import Footer from "./components/Footer/Footer";

export const UserContext = createContext(null);

function App() {
  const [user, setUser] = useState({displayName: "", email: "", uid: ""})
  return (
    <UserContext.Provider value={{user, setUser}}> 
      <BrowserRouter>
                <Login />
              <Routes>
                <Route path="/" element={<Layout />} />
                <Route path="/home" element={<BlogList />} />
                <Route path="/create" element={<CreateCard />} />
              </Routes>
            </BrowserRouter>
    </UserContext.Provider>
  );
  
  
}

export default App;
