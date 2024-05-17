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
import ALlBookings from "../../Dashboard/CustomerBookings/AllBookings";
import AdminRoute from "./AdminRoute/AdminRoute";
import SoundSystem from "../../Dashboard/SoundSystem/SoundSystem";
import PendingWorkSound from "../../Dashboard/SoundSystem/PendingWorkSound";
import CustomerBooking from "../../Dashboard/CustomerBookings/CustomerBooking";

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
        path: "/dashboard/all-users",
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
      {
        path: "/dashboard/pending-works-sound",
        element: (
           <PendingWorkSound/>
        ),
      },
      {
        path: "/dashboard/my-booking",
        element: (
           <CustomerBooking/>
        ),
      },
    ],
  },
]);
export default router;
