import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main';
import Home from './Components/Home/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='overflow-hidden' style={{ background: "linear-gradient(90deg, rgb(7, 35, 59) 1.67%, rgb(4, 29, 52) 39.95%, rgb(4, 25, 45) 58.24%, rgb(4, 14, 24) 80.28%, rgb(5, 12, 22) 101.48%)" }}>
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)