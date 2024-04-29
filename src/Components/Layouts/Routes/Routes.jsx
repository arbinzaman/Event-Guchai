import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../../Pages/Home/Home";
import ContactUs from "../../Pages/ContactUS/ContactUs";


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
