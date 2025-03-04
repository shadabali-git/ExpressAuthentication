import React from 'react'
interface LoaderProps {
    width?: number|null;
    height?: number|null;
}
const Loader :React.FC<LoaderProps>=()=>{
    return (
        <div
            className={`w-96 h-96 overflow-hidden flex justify-center items-center`}>

            <div className="absolute w-24 h-24 border-2 border-blue-700 transition-all animate-spin rounded-full">
            </div>
            <div className="absolute w-20 h-20 border-2 border-yellow-700 transition-all animate-spin">
            </div>
            <div className="absolute w-20 h-20 border-2 border-green-700 transition-all animate-spin">
            </div>
            <div className="absolute w-16 h-16 border-2 border-red-700 transition-all animate-spin">
            </div>
            <h2 className="absolute">
                Loading...
            </h2>
        </div>
    )
}

export default Loader;