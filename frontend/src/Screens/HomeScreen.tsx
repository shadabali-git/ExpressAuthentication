import React from "react";
import {useNavigate} from "react-router-dom";
import Loader from "@/components/Design/Loader.tsx";
import Swal from 'sweetalert2'
import Tictactoe from "@/components/Cards/Tictactoe.js";
import Puzzle from "@/components/Cards/Puzzle.js";


const HomeScreen: React.FC = () => {
    const navigate = useNavigate();
    const [isLoading, ] = React.useState<boolean>(false);
    const showAlert = (title: string, message: string, icon: "success" | "error") => {
        Swal.fire({
            title: title,
            text: message,
            icon: icon,
            timer: 3000,
            timerProgressBar: true,
            showConfirmButton: true,
            allowOutsideClick: true,
            allowEscapeKey: true,


        });
    };


    if(isLoading){
        return <div>
            <Loader />
           </div>

    }
    return (
        <div className="flex-1 flex flex-col w-full p-4">
            
            <Tictactoe showAlert={showAlert} navigate={navigate} /> 
            <Puzzle />
        </div>
    );
};

export default HomeScreen;