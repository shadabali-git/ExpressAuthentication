import React, {useState,useEffect} from "react";
import {Outlet,useNavigate} from "react-router-dom";
import Navbar from "./Navbar.tsx";
import AuthDialogue from "@/components/Authentication/AuthDialogue.tsx";
import {useDispatch} from "react-redux";
import {clearUserData, setToken, setUserDetails} from "@/redux/features/UserDetailsSlice.ts";
import axios from "axios";


const Layout: React.FC = () => {
    const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);
    const [isLogin, setIsLogin] = useState<boolean>(true);
    const dispatch = useDispatch();
    useEffect(() => {
        const token = localStorage.getItem('token');
        if(!token){
            navigate('/');
            return
        }
        if (token) {
            dispatch(setToken(token));
            axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/v1/get/user`, {
                headers: { Authorization: `Bearer ${token}` },
            })
                .then(res => dispatch(setUserDetails(res.data.userDetails)))
                .catch(() => {
                    dispatch(clearUserData());
                    localStorage.removeItem('token');
                    navigate('/');
                });
        }
    }, []);

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
