import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";

const ProtectiveRoute:React.FC<{children:React.ReactNode}>=({children})=>{

    const navigate=useNavigate();
    const token=localStorage.getItem('token');


    if(!token){
        navigate('/auth')
        return;
    }
    useEffect(() => {

    }, []);
    return <>{children}</>

}

export default ProtectiveRoute;