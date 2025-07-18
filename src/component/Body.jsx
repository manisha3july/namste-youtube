import React, { useState } from "react";
import Sidebar from "./Sidebar";
import MainContanier from "./MainContanier";
import { Outlet } from "react-router-dom";

function Body() {

  return (
    <div className="grid grid-cols-12">
      <div className="col-span-1">
        <Sidebar />
      </div>
      <div className="col-span-11">
        <Outlet />
      </div>
    </div>
  );
}

export default Body;
