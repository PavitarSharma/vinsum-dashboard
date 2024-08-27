import { axiosInstance } from "@/axiosInstance";
import { LockKeyhole, UserRound } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handlePasswordPaste = (event) => {
    event.preventDefault();
    setPassword("");
    toast.error("You can not paste the password");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!username) {
      toast.error("User name is required");
      return;
    }

    if(!password) {
      toast.error("Password is required");
      return;
    }

    try {
      const {data } = await axiosInstance.get(`/login?empid=${username}&passwd=${password}`, { crossdomain: false});
      console.log(data);
      
    } catch (error) {
      console.log(error);
      
    }

    // Simulate login request
    // setTimeout(() => {
    //   if (username === "admin" && password === "password") {
    //     toast.success("Login successful");
    //     // Redirect to dashboard
    //     window.location.href = "/dashboard";
    //   } else {
    //     toast.error("Invalid username or password");
    //   }
    // }, 1000);
  };

  return (
    <div
      style={{ backgroundImage: "url(/images/login.jpg)" }}
      className="w-full h-screen flex items-center justify-center bg-no-repeat bg-fixed bg-cover p-4"
    >
      <div className="max-w-lg w-full rounded-lg p-8 bg-gradient-to-b from-primary to-gray-800">
        <div className="py-6">
          <img
            src="/images/logo.png"
            alt="logo"
            className="mx-auto sm:w-auto w-48 rounded"
          />
          <p className="text-center mt-6 sm:text-4xl text-3xl font-semibold text-white">
            WMS-ERP
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-4 relative h-14 overflow-hidden">
            <UserRound
              id="user-icon"
              className="text-white absolute top-1/2 left-0 transform -translate-y-1/2 transition-all duration-500"
            />
            <input
              id="userId"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              className="w-full h-full bg-transparent border-b focus:outline-none focus:border-0 caret-white text-white font-normal focus:pt-4 pl-8 focus:pl-1 placeholder:text-white"
              onFocus={(e) => {
                e.target.nextSibling.classList.remove("-translate-x-[450px]");
                document
                  .getElementById("user-icon")
                  .classList.add("top-0", "translate-y-0");
                document
                  .getElementById("user-icon")
                  .classList.remove("top-1/2", "-translate-y-1/2");
              }}
              onBlur={(e) => {
                e.target.nextSibling.classList.add("-translate-x-[450px]");
                document
                  .getElementById("user-icon")
                  .classList.remove("top-0", "translate-y-0");
                document
                  .getElementById("user-icon")
                  .classList.add("top-1/2", "-translate-y-1/2");
              }}
            />
            <div className="absolute w-full h-[1.5px] bg-white bottom-0 left-0  rounded-full transition-all duration-500" />
          </div>

          <div className="mb-4 relative h-14 overflow-hidden">
            <LockKeyhole
              id="password-icon"
              className="text-white absolute top-1/2 left-0 transform -translate-y-1/2 transition-all duration-500"
            />
            <input
              id="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="w-full h-full bg-transparent border-b focus:outline-none focus:border-0 caret-white text-white font-normal focus:pt-4 pl-8 focus:pl-1 placeholder:text-white"
              onFocus={(e) => {
                e.target.nextSibling.classList.remove("-translate-x-[450px]");
                document
                  .getElementById("password-icon")
                  .classList.add("top-0", "translate-y-0");
                document
                  .getElementById("password-icon")
                  .classList.remove("top-1/2", "-translate-y-1/2");
              }}
              onBlur={(e) => {
                e.target.nextSibling.classList.add("-translate-x-[450px]");
                document
                  .getElementById("password-icon")
                  .classList.remove("top-0", "translate-y-0");
                document
                  .getElementById("password-icon")
                  .classList.add("top-1/2", "-translate-y-1/2");
              }}
              onPaste={handlePasswordPaste}
            />
            <div className="absolute w-full h-[1.5px] bg-white bottom-0 left-0  rounded-full transition-all duration-500" />
          </div>
          <div className="flex items-center justify-center mt-8">
            <button
              type="submit"
              className="px-8 py-3.5 rounded-full bg-white text-sm font-medium hover:bg-gradient-to-b from-green-300 to-green-500 hover:text-white transition-all"
            >
              Login
            </button>
          </div>

          <div className="mt-8 flex flex-col items-center justify-center">
            <Link to="#" className="text-white underline text-sm">Forgot Password?</Link>
            <p className="mt-2 text-sm text-gray-500 hover:text-gray-100">Vinsum Axpress Private Ltd(2023)</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
