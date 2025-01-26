// src/components/Layout.tsx
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar.tsx";
const Layout: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-50 text-gray-800 font-sans flex flex-col justify-center items-center">

               <Navbar/>
              <div className='flex-1'>
                  <Outlet />
              </div>



        </div>
    );
};

export default Layout;
