import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../../Pages/Home/Home";
import ContactUs from "../../Pages/ContactUS/ContactUs";
import EventMainPage from "../../Pages/Event/EventMainPage";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import DashboardLayouts from "../DashboardLayouts/DashboardLayouts";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";
import AllUsers from "../../Dashboard/AllUsers";
import ALlBookings from "../../Dashboard/AllBookings";
import AdminRoute from "./AdminRoute/AdminRoute";
import SoundSystem from "../../Dashboard/SoundSystem/SoundSystem";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/contactus",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/events",
        element: <EventMainPage></EventMainPage>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },

  {
    path: "/dashboard",
    element: (
      <PrivateRoutes>
        <DashboardLayouts></DashboardLayouts>
      </PrivateRoutes>
    ),
    children: [
      {
        path: "/dashboard",
        element: (
          <AdminRoute>
            <AllUsers></AllUsers>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/booking",
        element: (
          <AdminRoute>
           <ALlBookings/>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/sound-system",
        element: (
           <SoundSystem/>
        ),
      },
    ],
  },
]);
export default router;
