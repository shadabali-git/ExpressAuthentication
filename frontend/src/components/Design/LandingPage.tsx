import React from 'react';
import ImageGame from '../../assets/game.webp'
const LandingPage:React.FC=()=>{
         return (
            <div className="min-h-screen font-sans mb-4">
                <main>
                    <section className="py-20">
                        <div className="container mx-auto ">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                                <div className="flex flex-col justify-center">
                                    <h2 className="text-5xl md:text-6xl font-extrabold leading-loose font-sans">
                                        Play Tic-Tac-Toe Online – Real-Time, Real Fun!
                                    </h2>


                                </div>
                                <div className="relative">
                                    <div className="aspect-w-16 aspect-h-9">
                                        <img src={ImageGame} alt="Hero Image" className="h-96 rounded-lg object-cover" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>


                        <div className="container mx-auto px-4">
                            <h2 className="text-4xl font-semibold text-center mb-10">Key Features</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="p-6 rounded-lg shadow-md border  border-cyan-400 bg-cyan-100 cursor-pointer">
                                    <h3 className="text-2xl font-semibold text-cyan-400 ">Feature 1</h3>
                                    <p className="mt-2"> RealTime Tik Tak Toe  </p>
                                </div>
                                <div className="p-6 rounded-lg shadow-md border border-amber-400 bg-amber-100 cursor-pointer">
                                    <h3 className="text-2xl font-semibold text-amber-400">Feature 2</h3>
                                    <p className="mt-2">Guest Login Also Exist </p>
                                </div>
                                <div className="p-6 rounded-lg shadow-md border  border-rose-400 bg-rose-100 cursor-pointer">
                                    <h3 className="text-2xl font-semibold text-rose-400">Feature 3</h3>
                                    <p className="mt-2">Ai Mode Available </p>
                                </div>
                            </div>
                        </div>

                </main>

        </div>
    );
}

export default LandingPage;
