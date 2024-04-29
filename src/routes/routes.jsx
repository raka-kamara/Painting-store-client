import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import AddPainting from "../pages/AddPainting";
import Login from "../Components/Login";
import SignUp from "../Components/SignUp";
import MyPainting from "../pages/MyPainting";
import Details from "../Components/Details";
import PrivateRoute from "./PrivateRoute";
import Paintings from "../Components/Paintings";
import Crafts from "../Components/Crafts";
import UpdateMyPainting from "../pages/UpdateMyPainting";
import ErrorPage from "../pages/ErrorPage";
import SubCategory from "../Components/SubCategory";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/painting"),
      },
      {
        path: "/",
        element: <SubCategory></SubCategory>,
        loader: () => fetch("http://localhost:5000/category"),
      },
      {
        path: "/addPainting",
        element: (
          <PrivateRoute>
            <AddPainting></AddPainting>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/myPainting",
        element: (
          <PrivateRoute>
            <MyPainting></MyPainting>
          </PrivateRoute>
        ),
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <Details></Details>
          </PrivateRoute>
        ),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoute>
            <UpdateMyPainting></UpdateMyPainting>
          </PrivateRoute>
        ),
      },
      {
        path: "/crafts",
        element: (
          <PrivateRoute>
            <Crafts></Crafts>
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/painting"),
      },
      {
        path: "/paintings",
        element: (
          <PrivateRoute>
            <Paintings></Paintings>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
