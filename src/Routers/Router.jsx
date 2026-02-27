import { createBrowserRouter } from "react-router";
import Login from "../pages/Login";
import Error from "../pages/Error";
import DashboardLayout from "../pages/DashboardLayout";
import DashBoard from "../components/Dashboard/DashBoard";
import PrivateRoute from "./PrivetRoute";
import Analytics from "../components/Dashboard/Analytics";
import Users from "../components/Dashboard/Users";
import Products from "../components/Dashboard/Products";
import ProductDetails from "../components/Dashboard/ProductDetails";

export const router = createBrowserRouter(
    [
        // The Login Layout before dive to the Dashboard Pages
        {
            path: "/",
            Component: Login,
            errorElement:<Error></Error>,
            

        },
        // the Dashboard Page after succesfully login
        {
            path : "/dashboard",
            element : <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
            children:[

                {
                    index : true,
                    Component : DashBoard
                },
                
                {
                    path : "analytics",
                    Component : Analytics
                },
                {
                    path : "users",
                    Component : Users
                },
                {
                    path : "users/:id",
                    Component : Users
                },
                {
                    path : "products",
                    Component : Products
                },
                {
                    path : "products/:id",
                    Component : ProductDetails
                }
            ]

        }
    ]
)