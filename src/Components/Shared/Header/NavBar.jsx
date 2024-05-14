import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../../../Api/Context/AuthProvider";
 import useAdmin from "../../../Hooks/UseAdmin";
const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  const location = useLocation();
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch(() => console.error("error"));
  };
  return (
    <div className="font-serif">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <Link to="/events">
                {" "}
                <li>
                  <a>Events</a>
                </li>
              </Link>

              <Link to="/contactus">
                <li>
                  <a>Contact Us</a>
                </li>
              </Link>




              {isAdmin && (
              <>
                 <Link to="/dashboard">
                <li>
                  <a>Dashboard</a>
                </li>
              </Link>
              </>
            )}
             
            </ul>
          </div>
          <Link to="/">
            {" "}
            <a className="btn btn-ghost text-xl">Eventগুছাই</a>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <Link to="/events">
              {" "}
              <li>
                <a>Events</a>
              </li>
            </Link>
            <Link to="/contactus">
              <li>
                <a>Contact Us</a>
              </li>
            </Link>
          </ul>
        </div>
        <div className="navbar-end">
          {user?.uid ? (
            <>
              <span className="">
                <img
                  src={user?.photoURL}
                  title={user?.displayName}
                  className=" ml-auto h-10 rounded-full"
                  alt=""
                />
              </span>
              <button
                onClick={handleLogOut}
                className="btn btn-ghost normal-case text-xl"
              >
                Log Out
              </button>
            </>
          ) : (
            <>
              {location.pathname === "/login" || (
                <Link to="/login" className="btn btn-ghost normal-case text-xl">
                  Login
                </Link>
              )}

              {location.pathname === "/register" || (
                <Link
                  to="/register"
                  className="btn btn-ghost normal-case text-xl"
                >
                  Register
                </Link>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
