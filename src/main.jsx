import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './routers/Home.jsx'
import Login from './routers/Login.jsx'
import PIA from './routers/PIA I.jsx'
import DCNTs from './routers/DCNTs.jsx'
import PCS from './routers/PCS.jsx'
import "./styles/main.scss"

const router = createBrowserRouter ([
  {
    path:'/', element: <App/>,


    children:[
      {path:'/',element: <Login/>},
      {path:'/home',element: <Home />},
      {path:'/pia',element: <PIA/>},
      {path:'/dcnts',element: <DCNTs/>},
      {path:'/pcs',element: <PCS/>},

    ]
  }

])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
