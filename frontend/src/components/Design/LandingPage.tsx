import React, {useEffect, useState} from "react";
import ImageGame from '../../assets/game.webp'
import {useNavigate, useLocation} from "react-router-dom";
import {Button} from '../ui/button';
import Navbar from "@/components/Design/Navbar.tsx";
import Swal from 'sweetalert2'
import AuthDialogue from "@/components/Authentication/AuthDialogue.tsx";

const LandingPage: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [open, setOpen] = useState(false);
    const [isLogin, setIsLogin] = useState(false);

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const token = params.get("token");
        const alreadyToken = localStorage.getItem("token");
        if (alreadyToken) {
            navigate("/Dashboard");
        } else if (token) {
            localStorage.setItem("token", token);
            Swal.fire({
                title: "Login Successfully",
                text: "Welcome!",
                icon: "success",
                timer: 1500,
                showConfirmButton: false,
            }).then(() => navigate("/Dashboard", {replace: true}));
        }
    }, [location]);

    return (
        <div className="min-h-screen font-sans mb-4">
            <Navbar setOpen={setOpen} setIsLogin={setIsLogin}/>
            <main>
                <section>
                    <div className="container mx-auto px-4 md:px-8 lg:px-16 py-12">
                        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">

                            <div className="text-center md:text-left">
                                <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
                                    Play <span className="text-blue-600">Tic-Tac-Toe</span> Online – Real-Time
                                </h1>
                                <p className="mt-4 text-lg text-gray-600">
                                    Challenge friends or AI and test your skills in this classic game.
                                </p>
                                <div className="mt-6">
                                    <Button>
                                        Guest Mode
                                    </Button>
                                </div>
                            </div>

                            {/* Right Section - Smaller Image */}
                            <div className="flex justify-center md:justify-end">
                                <img
                                    src={ImageGame}
                                    alt="Tic-Tac-Toe Game"
                                    className="w-64 md:w-80 lg:w-96 rounded-lg shadow-lg"
                                />
                            </div>
                        </div>
                    </div>

                </section>


                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-semibold text-center mb-10">Key Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div
                            className="p-6 rounded-lg shadow-md border  border-cyan-400 bg-cyan-100 cursor-pointer">
                            <h3 className="text-2xl font-semibold text-cyan-400 ">Feature 1</h3>
                            <p className="mt-2"> RealTime Tik Tak Toe </p>
                        </div>
                        <div
                            className="p-6 rounded-lg shadow-md border border-amber-400 bg-amber-100 cursor-pointer">
                            <h3 className="text-2xl font-semibold text-amber-400">Feature 2</h3>
                            <p className="mt-2">Guest Login Also Exist </p>
                        </div>
                        <div
                            className="p-6 rounded-lg shadow-md border  border-rose-400 bg-rose-100 cursor-pointer">
                            <h3 className="text-2xl font-semibold text-rose-400">Feature 3</h3>
                            <p className="mt-2">Ai Mode Available </p>
                        </div>
                    </div>
                </div>

            </main>
            <AuthDialogue open={open} setOpen={setOpen} setIsLogin={setIsLogin} isLogin={isLogin}/>

        </div>
    );
}

export default LandingPage;
