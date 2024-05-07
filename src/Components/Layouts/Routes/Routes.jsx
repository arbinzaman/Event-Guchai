import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../../Pages/Home/Home";
import ContactUs from "../../Pages/ContactUS/ContactUs";
import EventMainPage from "../../Pages/Event/EventMainPage";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";


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

  // {
  //   path: "/dashboard",
  //   element: (
  //     <PrivateRoutes>
  //       <DashBoradLayouts></DashBoradLayouts>
  //     </PrivateRoutes>
  //   ),
  //   children: [
 
  //   ],
  // },
]);
export default router;
