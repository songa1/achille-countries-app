import React from "react";

function Navbar() {
  return (
    <div className="py-5 px-10 shadow-md bg-gray-800">
      <div className="flex justify-between items-center main">
        <div>
          <h1>Where in the world?</h1>
        </div>
        <div>
          <p>Dark Mode</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
