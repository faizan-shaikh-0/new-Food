import { createBrowserRouter } from "react-router-dom";
import Login from "../Login"
import Signup from "./Signup";

export  const  route= createBrowserRouter([
    {
        path:"/login",
        element: <Login/>
    },
    {
        path:'/signup',
        element:<Signup/>
    }
])