import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import GoogleLogin from "../components/Login-Registration/GoogleLogin";
import useAuth from "../hooks/useAuth";

const Registration = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [passMatch, setPassMatch] = useState(true);

  const { createUser, user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state?.from?.pathname || "/";

  useEffect(() => {
    if (password && confirmPassword && password === confirmPassword) {
      setIsButtonDisabled(false);
      setPassMatch(true);
    } else {
      setIsButtonDisabled(true);
      setPassMatch(false);
    }
  }, [password, confirmPassword]);

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, from, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;

    console.log(name, email, password, confirmPassword);

    if (password === confirmPassword) {
      createUser(email, password);
      if (user) {
        navigate(from);
      }
    }

    // Reset form fields
    form.reset();
    setPassword("");
    setConfirmPassword("");
    setIsButtonDisabled(true);
    setPassMatch(true);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
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
              placeholder="Name"
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
              name="password"
              type="password"
              autoComplete="new-password"
              required
              value={password}
              onChange={handlePasswordChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-400 sm:text-sm"
              placeholder="Password"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              name="confirm_password"
              type="password"
              required
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-400 sm:text-sm"
              placeholder="Confirm Password"
            />
          </div>
          {password && confirmPassword && password !== confirmPassword ? (
            <div className="my-2">
              <p className="text-red-500">Passwords do not match!</p>
            </div>
          ) : password && confirmPassword ? (
            <div className="my-2">
              <p className="text-red-500"></p>
            </div>
          ) : (
            <div className="my-2">
              <p className="text-red-500">
                Fill up all for enable registration button
              </p>
            </div>
          )}
          <div className="mt-6">
            <button
              type="submit"
              disabled={isButtonDisabled}
              className={`w-full text-white flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                isButtonDisabled
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-indigo-600 hover:bg-indigo-700"
              }`}
            >
              Register
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
