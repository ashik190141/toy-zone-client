import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main';
import Home from './Pages/Home/Home';
import AuthProvider from './AuthProvider/AuthProvider';
import SignIn from './Pages/Authenticate/SignIn';
import SignUp from './Pages/Authenticate/SignUp';
import ErrorPage from '../src/Pages/ErrorPage/ErrorPage.jsx';
import CategoryDetails from './Pages/Home/CategoryDetails';
import AddToy from './Pages/AddToy/AddToy';
import AllToy from './Pages/AllToy/AllToy';
import AllToyDetails from './Pages/AllToy/AllToyDetails';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import MyToy from './Pages/MyToy/MyToy';
import UpdateToy from './Pages/MyToy/UpdateToy';
import Blog from './Pages/Blog/Blog';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/:id',
        element: <PrivateRoute><CategoryDetails></CategoryDetails></PrivateRoute>,
        loader: ({ params }) => fetch('Data.json')
      },
      {
        path: '/login',
        element: <SignIn></SignIn>
      },
      {
        path: '/register',
        element: <SignUp></SignUp>
      },
      {
        path: '/addToy',
        element: <AddToy></AddToy>
      },
      {
        path: '/allToy',
        element: <AllToy></AllToy>
      },
      {
        path: '/allToy/:id',
        element: <PrivateRoute><AllToyDetails></AllToyDetails></PrivateRoute>,
        loader: ({params}) => fetch(`https://toyzone-server.vercel.app/allToys/${params.id}`)
      },
      {
        path: "/myToy",
        element: <MyToy></MyToy>
      },
      {
        path: "/myToy/:id",
        element: <UpdateToy></UpdateToy>,
        loader: ({params}) => fetch(`https://toyzone-server.vercel.app/allToys/${params.id}`)
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
