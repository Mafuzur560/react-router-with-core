import HomeLayout from '../Layout/HomeLayout';
import Products from '../Components/Products/Products';
import Dashboard from '../Components/Dashboard/Dashboard';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../Components/Home/Home';
import ProductDetails from '../Components/ProductDetails';
import DashboardLayout from '../Layout/DashboardLayout';
import Profile from '../Components/Dashboard/Profile';
import EditProfile from '../Components/Dashboard/EditProfile';

const myCreatedRoute = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout></HomeLayout>,
      children: [
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path: "/products",
          element: <Products></Products>,
          loader: () => fetch("https://dummyjson.com/products")
          
        },
        {
            path: "/products/:id",
            element: <ProductDetails></ProductDetails>,
            loader: ({ params }) => fetch(`https://dummyjson.com/products/${params.id}`)
        },
        {
          path: "/dashboard",
          element: <DashboardLayout></DashboardLayout>,
          children: [
            {
                path: "/dashboard",
                element: <Dashboard></Dashboard>
            },
            {
                path: "/dashboard/profile",
                element: <Profile></Profile>
            },
            {
                path: "/dashboard/editProfile",
                element: <EditProfile></EditProfile>
            },
          ]
        }
      ]
    }
  ])

export default myCreatedRoute;