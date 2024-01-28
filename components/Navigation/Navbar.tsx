"use client";

import React, { useEffect, useState } from "react";
import { Image, Typography } from "antd";

const { Paragraph } = Typography;

function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  useEffect(() => {
    document.body.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };
  return (
    <div className="shadow-md bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100 py-5">
      <div className="flex justify-between items-center main">
        <div>
          <h1 className="font-black">Where in the world?</h1>
        </div>
        <div>
          <div
            className="light:hidden flex items-center justify-center gap-2 cursor-pointer"
            onClick={toggleDarkMode}
          >
            <Image
              width={20}
              src={isDarkMode ? "/dark.png" : "/light-mode.png"}
              alt="dark mode"
              preview={false}
            />
            <p>{isDarkMode ? "Dark Mode" : "Light Mode"}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
