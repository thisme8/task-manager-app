import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Hero = () => {
  const { logout } = useContext(AuthContext);

  const handleLogout = async (e) => {
    e.preventDefault();
    await logout();
    window.location.href = "/login";
  };
  return (
    <div>
      <nav className="sticky bg-[#f0f8ff] backdrop-blur supports-[backdrop-filter]:bg-background/60  border-2 border-[#152a1f]  max-w-screen h-[50px] mb-[5%] pt-[25px] mt-0">
        <div className="container flex flex-row justify-between items-center">
          <div className="flex space-x-6">
            <a
              href="/"
              className="text-[#253a2f] font-bold no-underline ml-[40%]  mr-[40%] hover:text-[#daa520] font-semibold"
            >
              Home
            </a>
            <a
              href="#footer"
              className="text-[#253a2f] font-bold no-underline ml-[40%]  mr-[40%] hover:text-[#daa520] font-semibold"
            >
              About
            </a>
            <a
              href="/dashboard"
              className="text-[#253a2f] font-bold no-underline ml-[40%]  mr-[40%] hover:text-[#daa520] font-semibold"
            >
              DashBoard
            </a>
            <a
              href="#contact"
              className="text-[#253a2f] font-bold no-underline ml-[40%]  mr-[40%] hover:text-[#daa520] font-semibold"
            >
              Contact
            </a>
            <a
              href="/login"
              className="text-[#253a2f] font-bold no-underline ml-[40%]  mr-[40%] hover:text-[#daa520] font-semibold"
            >
              LogIn
            </a>

            <a
              href="/login"
              onClick={handleLogout}
              className="text-[#253a2f] font-bold no-underline ml-[40%]  mr-[40%] hover:text-[#daa520] font-semibold"
            >
              LogOut
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Hero;
