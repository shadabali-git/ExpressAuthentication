import {NavLink} from "react-router-dom";
import {Button} from "../ui/button";
import {cn} from "@/lib/utils.ts";
import React from "react";
import { useAppSelector, useAppDispatch } from "@/hooks/redux"
import { clearUserData } from "@/redux/features/UserDetailsSlice.ts"

interface DialogComponentProps {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar: React.FC<DialogComponentProps> = ({setOpen, setIsLogin}) => {
    // const navigate = useNavigate()
    const { userDetails } = useAppSelector((state) => state.userDetails)
    const dispatch = useAppDispatch()
    console.log("User Data : ",userDetails)
    const handleLogout = () => {
        dispatch(clearUserData())
    }
    const navItems = [
        {name: "Home", path: "/"},
        {name: "About", path: "/about"},
        {name: "Services", path: "/services"},
        {name: "Contact", path: "/contact"},
    ];


    const openLoginDialog = () => {
        setIsLogin(true);
        setOpen(true);
    };
    //  function to open Register Dialog
    const openRegisterDialog = () => {
        setIsLogin(false);
        setOpen(true);
    };
    const GoogleSignIn = () => {
        window.location.href = `${import.meta.env.VITE_BACKEND_URL}/api/auth/google`;
    }
    return (
        <nav className="bg-white shadow-md w-full">
            <div className="container mx-auto flex items-center justify-between p-4">

                <div className="text-xl font-bold text-primary"> Keep Secret</div>
                {userDetails ?
                    (
                        <>
                            <div className="hidden md:flex space-x-6">
                                {navItems.map((item) => (
                                    <NavLink
                                        key={item.path}
                                        to={item.path}
                                        className={({isActive}) =>
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
                            <div className="flex gap-2">
                                <Button variant="outline" size="sm">
                                    {userDetails.username}
                                </Button>
                                <Button variant="outline" size="sm" onClick={handleLogout}>Logout</Button>
                            </div>
                        </>) : (
                        <>
                            <div className="hidden md:flex space-x-4">
                                <Button variant="outline" size="sm" className="gap-0" onClick={GoogleSignIn}>
                                    <span className="p-0 m-0 text-blue-600">G</span>
                                    <span className="p-0 m-0 text-red-600">o</span>
                                    <span className="p-0 m-0 text-yellow-600">o</span>
                                    <span className="p-0 m-0 text-blue-600">g</span>
                                    <span className="p-0 m-0 text-green-600">l</span>
                                    <span className="p-0 m-0 text-red-600">e</span>
                                </Button>
                                <Button variant="outline" size="sm" onClick={openLoginDialog}>
                                    Log In
                                </Button>
                                <Button size="sm" onClick={openRegisterDialog}>Sign Up </Button>
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
