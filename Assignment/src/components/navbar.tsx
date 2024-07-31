import React from "react";

const Navbar: React.FC = () => {
  return (
    <>
      <nav className="bg-gray-800 text-white p-3 ">
        <div className="container flex mx-auto justify-between items-center">
          <div className="text-xl font-extrabold">LOGO</div>
          <div className="space-x-6">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Service</a>
            <a href="#">Login</a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
