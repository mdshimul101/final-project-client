import React, { useState } from "react";
import { Link } from "react-router-dom";
import GoogleLogin from "../components/Login-Registration/GoogleLogin";

const Registration = () => {
  const [passMatch, setPassMatch] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirm_password = form.confirm_password.value;

    if (password !== confirm_password) {
      setPassMatch(false);
    }

    console.log(name, email, password, confirm_password);
  };

  const handleGoogleLogin = () => {
    // Add logic for Google login here
    console.log("Logging in with Google...");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-rose-100 via-gray-200 to-teal-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-center text-3xl font-extrabold text-gray-900 mb-4">
          Registration
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-400 sm:text-sm"
              placeholder="Email address"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              name="email"
              type="email"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-400 sm:text-sm"
              placeholder="Email"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-400 sm:text-sm"
              placeholder="Password"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirm_password"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-400 sm:text-sm"
              placeholder="Confirm Password"
            />
          </div>
          {!passMatch ? (
            <div className="my-2">
              <p className="text-red-500">Passwords do not match!</p>
            </div>
          ) : (
            ""
          )}
          <div className="mt-6">
            <button
              type="submit"
              className="w-full text-white  bg-indigo-600 
               hover:bg-indigo-700 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Registration
            </button>
          </div>
          <div className="mt-4">
            <GoogleLogin />
          </div>
          <div className="mt-6">
            <p>
              Already have an account?{" "}
              <Link to="/login" className="text-red-500">
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
