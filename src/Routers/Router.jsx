import { createBrowserRouter } from "react-router";
import Login from "../pages/Login";
import Error from "../pages/Error";

export const router = createBrowserRouter(
    [
        {
            path: "/",
            Component: Login,
            errorElement:<Error></Error>

        }
    ]
)