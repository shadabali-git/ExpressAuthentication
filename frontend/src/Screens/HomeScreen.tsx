import React from "react";
import {useNavigate} from "react-router-dom";
import Loader from "@/components/Design/Loader.tsx";
import Swal from 'sweetalert2'

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
            <div className="mb-8">
                <div className="flex flex-col md:flex-row items-center border rounded-lg p-4 shadow-md">
                    <div className="md:w-1/2 mb-4 md:mb-0">
                        <img
                            src="data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='200' height='200' fill='%23E0E0E0'/%3E%3Cline x1='66.6667' y1='0' x2='66.6667' y2='200' stroke='black' stroke-width='2'/%3E%3Cline x1='133.333' y1='0' x2='133.333' y2='200' stroke='black' stroke-width='2'/%3E%3Cline x1='0' y1='66.6667' x2='200' y2='66.6667' stroke='black' stroke-width='2'/%3E%3Cline x1='0' y1='133.333' x2='200' y2='133.333' stroke='black' stroke-width='2'/%3E%3C/svg%3E" // Dummy Tic Tac Toe board image
                            alt="Tic Tac Toe Board"
                            className="w-full h-auto"
                        />
                    </div>
                    <div className="md:w-1/2 flex flex-col items-center">
                        <h2 className="text-2xl font-semibold mb-4">Play Tic Tac Toe</h2>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2" onClick={()=>showAlert("Wait few days","Working on this part","success")} >
                            Play Online
                        </button>
                        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={()=>navigate('/gameplay')}>
                            Play Offline
                        </button>
                    </div>
                </div>
            </div>
            <div className="border rounded-lg p-4 shadow-md"> {/* Card for Solve Puzzle */}
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 mb-4 md:mb-0">
                        <img
                            src="data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='200' height='200' fill='%23F0F0F0'/%3E%3Cpath d='M100 20L130 80L190 90L140 130L150 190L100 160L50 190L60 130L10 90L70 80L100 20Z' fill='gray'/%3E%3C/svg%3E" // Dummy complex situation image
                            alt="Complex Puzzle"
                            className="w-full h-auto"
                        />
                    </div>
                    <div className="md:w-1/2 flex flex-col items-center">
                        <h2 className="text-2xl font-semibold mb-4">Solve Puzzle</h2>
                        <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
                            Solve Puzzle
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeScreen;