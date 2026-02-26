import { createBrowserRouter } from "react-router";
import Login from "../pages/Login";
import Error from "../pages/Error";

export const router = createBrowserRouter(
    [
        // The Login Layout before dive to the Dashboard Pages
        {
            path: "/",
            Component: Login,
            errorElement:<Error></Error>

        }
    ]
)