import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {useDispatch,useSelector} from "react-redux";
import {setUserDetails} from "@/redux/features/UserDetailsSlice.ts";

const ProtectiveRoute:React.FC<{children:React.ReactNode}>=({children})=>{

    const navigate=useNavigate();

    const dispatch=useDispatch();
    const userDetails=useSelector((state:any)=>state.userDetails.userDetails);


    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/landing')
            localStorage.removeItem('token')
            return;
        }

        if (userDetails) {
            return
        }

        const callUserDate = async (token: string) => {
            try {
                const userResponse = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/v1/get/user`, {
                    headers: {
                        'Content-Type': 'application/json',
                        'authorization': `Bearer ${token}`
                    }
                });
                if (userResponse) {
                    dispatch(setUserDetails(userResponse.data.userDetails))
                }

            } catch (e) {
                console.log('User Details error', e)
                navigate('/landing')
                localStorage.removeItem('token')
            }

        }
        callUserDate(token)


    },[dispatch,navigate,userDetails])

    return <>{children}</>

}

export default ProtectiveRoute;
