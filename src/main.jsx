import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
// import HomeLayout from './Layout/HomeLayout'
// import Products from './Components/Products/Products'
// import Dashboard from './Components/Dashboard/Dashboard'
import myCreatedRoute from './Router/Route'

// const myCreatedRoute = createBrowserRouter([
//   {
//     path: "/",
//     element: <HomeLayout></HomeLayout>,
//     children: [
//       {
//         path: "/",
//         element: <div>Home</div>
//       },
//       {
//         path: "/products",
//         element: <Products></Products>,
        
//       },
//       {
//         path: "/dashboard",
//         element: <Dashboard></Dashboard>
//       }
//     ]
//   }
// ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={myCreatedRoute}></RouterProvider>
  </React.StrictMode>,
)
