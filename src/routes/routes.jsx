import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import AddPainting from "../pages/AddPainting";
import Login from "../Components/Login";
import SignUp from "../Components/SignUp";
import MyPainting from "../pages/MyPainting";

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
                element: <AddPainting></AddPainting>
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
                element: <MyPainting></MyPainting>
            },
        ]
    }
]);

export default router;