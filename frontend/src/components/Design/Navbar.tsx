import { NavLink} from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React from "react";
import {useSelector} from "react-redux";
import {UserDetailsState} from "@/redux/features/UserDetailsSlice.ts";

interface DialogComponentProps {
    setOpen:  React.Dispatch<React.SetStateAction<boolean>>;
    setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar:React.FC<DialogComponentProps > = ({setOpen,setIsLogin}) => {

    const userDetail = useSelector((state:UserDetailsState) => state.userDetails?.name);
    console.log(userDetail);
    const navItems = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Services", path: "/services" },
        { name: "Contact", path: "/contact" },
    ];

    //  function to open Login Dialog
    const openLoginDialog = () => {
          setIsLogin(true);
          setOpen(true);
    };
    //  function to open Register Dialog
    const openRegisterDialog = () => {
          setIsLogin(false);
          setOpen(true);
    };



    return (
        <nav className="bg-white shadow-md w-full">
            <div className="container mx-auto flex items-center justify-between p-4">

                <div className="text-xl font-bold text-primary"> Keep Secret  </div>
                <div className="hidden md:flex space-x-6">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            className={({ isActive }) =>
                                cn(
                                    "text-base font-medium transition duration-200",
                                    isActive
                                        ? "text-primary underline decoration-2 underline-offset-4"
                                        : "text-gray-600 hover:text-primary"
                                )
                            }
                        >
                            {item.name}
                        </NavLink>
                    ))}
                </div>
                {userDetail?
                    (<div>
                        <Button variant="outline" size="sm">
                            {userDetail}
                        </Button>
                    </div>
                    ):(
                  <>
                <div className="hidden md:flex space-x-4">
                    <Button variant="outline" size="sm" onClick={openLoginDialog}>
                        Log In
                    </Button>
                    <Button size="sm" onClick={openRegisterDialog}>Sign Up </Button >
                </div>

                <div className="md:hidden">
                    <Button variant="ghost" size="icon">
                        <span className="sr-only">Toggle Menu</span>☰
                    </Button>
                </div>
                  </>
                    )}
            </div>
        </nav>
    );
};

export default Navbar;
