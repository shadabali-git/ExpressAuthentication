import React from 'react';
import TicTacToe from "@/components/game/TicTacToe.tsx";
import {ArrowLeft} from "lucide-react"
import {useNavigate} from "react-router-dom"

const GamePlayScreen: React.FC = () => {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col items-center min-h-screen gap-4 pt-6">
            <button onClick={()=>{navigate('/')}}> <ArrowLeft className="absolute left-4 top-4 "/> </button>
            <TicTacToe/>
        </div>
    );
}
export default GamePlayScreen;