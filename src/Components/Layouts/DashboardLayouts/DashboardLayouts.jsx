// import  { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
// import { AuthContext } from "../../../Api/Context/AuthProvider";
// import useAdmin from "../../../Hooks/UseAdmin";
import NavBar from "../../Shared/Header/NavBar";

const DashBoardLayouts = () => {
  //   const { user } = useContext(AuthContext);
  //   const [isAdmin] = useAdmin(user?.email);
  return (
    <div className="font-serif">
      <NavBar></NavBar>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col ">
          <Outlet></Outlet>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
       
            <li>
              <Link to="/dashboard" className="text-2xl">DashBoard</Link>
            </li>

            <li>
              <Link to="/dashboard">All Users</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashBoardLayouts;
