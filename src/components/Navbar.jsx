import { FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Navbar = () => {
  const { logout, user } = useAuth();

  const handleLogout = async () => {
    await logout();
  };
  return (
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
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/about"}>About</Link>
            </li>
            {!user && (
              <>
                <li>
                  <Link to={"/login"}>Login</Link>
                </li>
                <li>
                  <Link to={"/registration"}>Registration</Link>
                </li>
              </>
            )}
            {user && (
              <li>
                <Link to={"/dashboard"}>Dashboard</Link>
              </li>
            )}
            <div className="block md:hidden">
              {user && (
                <li>
                  <Link onClick={handleLogout} to={""}>
                    Logout
                  </Link>
                </li>
              )}
            </div>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Final - Task</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          {!user && (
            <>
              <li>
                <Link to={"/login"}>Login</Link>
              </li>
              <li>
                <Link to={"/registration"}>Registration</Link>
              </li>
            </>
          )}
          {user && (
            <li>
              <Link to={"/dashboard"}>Dashboard</Link>
            </li>
          )}
        </ul>
      </div>

      <div className="navbar-end space-x-2">
        <div className="hidden md:block">
          {user && (
            <button
              onClick={handleLogout}
              className="group flex items-center justify-center px-4 py-1 bg-gradient-to-r from-rose-50 via-gray-100 to-teal-50 text-gray-500 hover:text-gray-600 rounded-3xl  border border-gray-500  focus:ring-4  "
            >
              <FiLogOut className="mr-2 text-base transform transition-transform duration-300 ease-in-out group-hover:rotate-180" />
              <span className="font-semibold text-lg">Logout</span>
            </button>
          )}
        </div>
        <div className="avatar">
          <div className="w-12 rounded-full border-2 border-black">
            <img src={user?.photoURL || "/public/placeholder.jpg"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
