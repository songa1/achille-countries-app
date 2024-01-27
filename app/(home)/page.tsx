import Navbar from "@/components/Navigation/Navbar";
import Filter from "@/components/Search/Filter";
import Search from "@/components/Search/Search";
import React from "react";

function Countries(props) {
  return (
    <div className="container">
      <div className="main">
        <div>
          <Search />
          <Filter />
        </div>
        
      </div>
    </div>
  );
}

export default Countries;
