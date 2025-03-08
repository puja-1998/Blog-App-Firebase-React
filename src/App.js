
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Layout from './components/Layout/Layout';
import BlogList from './components/BlogList/BlogList';
import CreateCard from './components/CreateCard/CreateCard';

const router = createBrowserRouter([
  {
    path:"",
    element:<Layout />,
    children:[
      {
      path:"/home",
      element:<BlogList />
    },
    
    {
      path:"/create",
      element:<CreateCard />
    },
  ],
  },
  {
    path:"/",
    element:<Login />
  }
])
function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
