import { createBrowserRouter } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import Main from "../../Layout/Main";
import Login from "../../Login/Login";
import AppointmentPage from "../../Pages/Appointment/AppointmentPage";
import Sign from "../../SignUp/Sign";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import PrivateRoute from "../PrivateRoute/PvtRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Sign></Sign>
            },
            {
                path: '/appointment',
                element: <AppointmentPage></AppointmentPage>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
    },
])

export default router;