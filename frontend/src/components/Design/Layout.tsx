import React, {useState} from "react";
import {Outlet} from "react-router-dom";
import Navbar from "./Navbar.tsx";
import AuthDialogue from "@/components/Authentication/AuthDialogue.tsx";

const Layout: React.FC = () => {
    const [open, setOpen] = React.useState(false);
    const [isLogin, setIsLogin] = useState<boolean>(true);
    return (
        <div className="min-h-screen bg-gray-50 text-gray-800 font-sans flex flex-col justify-center items-center">

            <Navbar setOpen={setOpen} setIsLogin={setIsLogin}/>
            <div className='flex-1'>
                <Outlet/>
            </div>
            <AuthDialogue open={open} setOpen={setOpen} isLogin={isLogin} setIsLogin={setIsLogin}/>


        </div>
    );
};

export default Layout;
