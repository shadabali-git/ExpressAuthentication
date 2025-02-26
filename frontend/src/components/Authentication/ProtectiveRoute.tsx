import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {useDispatch} from "react-redux";
import {setUserDetails} from "@/redux/features/UserDetailsSlice.ts";

const ProtectiveRoute:React.FC<{children:React.ReactNode}>=({children})=>{

    const navigate=useNavigate();
    const token=localStorage.getItem('token');
    const dispatch=useDispatch();

    console.log('token', token)
        if(!token){
            navigate('/landing')
            localStorage.removeItem('token')

            return;
        }
        else {
            const callUserDate = async (token: string) => {
                console.log('token', token)
                try {
                    const userResponse = await axios.get('http://localhost:8080/api/v1/get/user', {
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
                callUserDate(token)
            }
        }


    return <>{children}</>

}

export default ProtectiveRoute;