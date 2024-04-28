import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import AddPainting from "../pages/AddPainting";
import Login from "../Components/Login";
import SignUp from "../Components/SignUp";
import MyPainting from "../pages/MyPainting";
import Details from "../Components/Details";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/painting')
            },
            {
                path: '/addPainting',
                element: <PrivateRoute><AddPainting></AddPainting></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>
            },
            {
                path: '/myPainting',
                element: <PrivateRoute><MyPainting></MyPainting></PrivateRoute>
            },
            {
                path: '/details',
                element: <PrivateRoute><Details></Details></PrivateRoute>
            },
        ]
    }
]);

export default router;