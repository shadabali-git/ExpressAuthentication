function Puzzle() {
    return (
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
    )
}

export default Puzzle;