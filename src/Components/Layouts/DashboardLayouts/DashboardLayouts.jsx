// import  { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../../../Api/Context/AuthProvider";
// import useAdmin from "../../../Hooks/UseAdmin";
import NavBar from "../../Shared/Header/NavBar";
import useUserRoles from "../../../Hooks/UseUserRole";
import { useContext } from "react";

const DashBoardLayouts = () => {
  const { user } = useContext(AuthContext);
  // const [isAdmin] = useAdmin(user?.email);
  const vendorRole = useUserRoles(user?.email);
  // console.log(vendorRole);
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
              <Link to="/dashboard/my-booking" className="text-2xl">
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/dashboard/my-booking">
                My Bookings
              </Link>
            </li>

            {user?.role == "admin" && (
              <>
                <li>
                  <Link to="/dashboard/all-users">Users</Link>
                </li>
                <li>
                  <Link to="/dashboard/booking">Bookings</Link>
                </li>
              </>
            )}

            {vendorRole.vendorRoles == "sound_system" && (
              <>
                <li>
                  <Link to="/dashboard/sound-system">Sound System</Link>
                  <Link to="/dashboard/pending-works-sound">Pending Works</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashBoardLayouts;
