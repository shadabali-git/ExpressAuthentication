import React from "react";

interface TictactoeProps {
  showAlert: (title: string, message: string, icon: "success" | "error") => void;
  navigate: (path: string) => void;
}

const Tictactoe: React.FC<TictactoeProps> = ({ showAlert, navigate }) => {
  return (
    <div className="mb-8">
      <div className="flex flex-col md:flex-row items-center border rounded-lg p-4 shadow-md">
        <div className="md:w-1/2 mb-4 md:mb-0">
          <img
            src="data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='200' height='200' fill='%23E0E0E0'/%3E%3Cline x1='66.6667' y1='0' x2='66.6667' y2='200' stroke='black' stroke-width='2'/%3E%3Cline x1='133.333' y1='0' x2='133.333' y2='200' stroke='black' stroke-width='2'/%3E%3Cline x1='0' y1='66.6667' x2='200' y2='66.6667' stroke='black' stroke-width='2'/%3E%3Cline x1='0' y1='133.333' x2='200' y2='133.333' stroke='black' stroke-width='2'/%3E%3C/svg%3E"
            alt="Tic Tac Toe Board"
            className="w-full h-auto"
          />
        </div>
        <div className="md:w-1/2 flex flex-col items-center">
          <h2 className="text-2xl font-semibold mb-4">Play Tic Tac Toe</h2>

          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2"
            onClick={() =>
              showAlert("Wait few days", "Working on this part", "success")
            }
          >
            Play Online
          </button>

          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => navigate("/gameplay")}
          >
            Play Offline
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tictactoe;
