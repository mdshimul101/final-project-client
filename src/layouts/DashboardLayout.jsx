import React, { useState } from "react";
import {
  FaBars,
  FaBoxOpen,
  FaHome,
  FaPlus,
  FaSignOutAlt,
} from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { TbLogout2 } from "react-icons/tb";
import { Link, Outlet } from "react-router-dom";

import useAuth from "../hooks/useAuth";

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const { logout } = useAuth();

  const handleLogout = async () => {
    await logout();
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-300 to-purple-300 text-white p-4 flex justify-between items-center shadow-md">
        <div className="text-xl font-bold text-gray-100 ml-10">Dashboard</div>
        <div className="md:hidden">
          {isSidebarOpen ? (
            <button className="btn btn-primary" onClick={toggleSidebar}>
              <RxCross2 />
            </button>
          ) : (
            <button className="btn btn-primary" onClick={toggleSidebar}>
              <FaBars />
            </button>
          )}
        </div>
        <div className="hidden md:flex items-center space-x-2">
          <button
            onClick={handleLogout}
            className="flex items-center btn text-lg "
          >
            <TbLogout2 />
            Logout
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside
          className={`bg-gray-800 text-white w-64 p-6 md:p-10 fixed bottom-0 top-20 md:top-0 left-0 transform ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } md:relative md:translate-x-0 transition-transform duration-200 ease-in-out z-50`}
        >
          <nav>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/dashboard"
                  className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-700"
                >
                  <FaHome className="text-lg" />
                  <span>Dashboard</span>
                </Link>
              </li>
              <li>
                <Link
                  to="all-products"
                  className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-700"
                >
                  <FaBoxOpen className="text-lg" />
                  <span>All Products</span>
                </Link>
              </li>
              <li>
                <Link
                  to="add-products"
                  className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-700"
                >
                  <FaPlus className="text-lg" />
                  <span>Add Product</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-700"
                >
                  <FaSignOutAlt className="text-lg" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link
                  onClick={handleLogout}
                  to="/"
                  className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-700"
                >
                  <TbLogout2 />
                  <span>Logout</span>
                </Link>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Overlay for Sidebar on Small Screens */}
        {/* {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black opacity-50 z-40 md:hidden"
            onClick={toggleSidebar}
          ></div>
        )} */}

        {/* Main Content Area */}
        <main className="flex-1 p-6 md:p-20 bg-gray-100">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
