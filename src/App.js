
import { createBrowserRouter, RouterProvider, } from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login';
import Layout from './components/Layout/Layout';
import BlogList from './components/BlogList/BlogList';
import CreateCard from './components/CreateCard/CreateCard';
import { createContext, useState } from 'react';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
  {
    path: "",
    element: <Layout />,
    children: [
      {
      path: "/home",
      element:<BlogList />
    },
    
    {
      path: "/create",
      element: <CreateCard />
    },
  ],
  },
]);

export const UserContext = createContext(null);

function App() {
  const [user, setUser] = useState({displayName: "", email: "", uid: ""})
  return (
    <UserContext.Provider value={{user, setUser}}> 
      <RouterProvider router = {router} />
    </UserContext.Provider>
  );
  
  
}

export default App;
