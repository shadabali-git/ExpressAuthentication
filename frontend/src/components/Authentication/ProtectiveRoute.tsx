import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {useDispatch,useSelector} from "react-redux";
import {setUserDetails,setLoading} from "@/redux/features/UserDetailsSlice.ts";
import { RootState } from "@/redux/store.ts";

const ProtectiveRoute:React.FC<{children:React.ReactNode}>=({children})=>{

    const navigate=useNavigate();

    const dispatch=useDispatch();
    const userDetails=useSelector((state:RootState)=>state.userDetails.userDetails);
    const loading = useSelector((state: RootState) => state.userDetails.Loading);



    useEffect(() => {
        dispatch(setLoading(true))
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/landing')
            localStorage.removeItem('token')
            dispatch(setLoading(false))
            return;
        }

        if (userDetails) {
            dispatch(setLoading(false))
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
                    dispatch(setLoading(false))
                }

            } catch (e) {
                console.log('User Details error', e)
                navigate('/landing')
                localStorage.removeItem('token')
                dispatch(setLoading(false))
            }

        }
        callUserDate(token)


    },[dispatch,navigate,userDetails])

    if(loading){
        return <div>Loading...</div>
    }

    return <>{children}</>

}

export default ProtectiveRoute;
