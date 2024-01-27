import React from "react";
import { Typography } from "antd";

const { Title } = Typography;

function Navbar() {
  return (
    <div className="shadow-md bg-gray-800 py-5">
      <div className="flex justify-between items-center main">
        <div>
          <h1 className="font-black">Where in the world?</h1>
        </div>
        <div>
          <p>Dark Mode</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
