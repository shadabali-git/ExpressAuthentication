import {useState} from "react";
import axios from "axios";

const Temp = () => {

    const [board, setBoard] = useState<number[]>([0, 0, 0, 0, 0, 0, 0, 0, 0]);

    const callApi = async (index: number) => {
        try {
            const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/v1/tictacktoe/ai`,
                {
                    userId: "68dc70ebea2a5e84d7db57e5",
                    index:index,
                    status: "init"
                },
                {headers: {"Content-Type": "application/json"}});

            console.log(response);
            if(!response){
                alert("Error");
            }
            if(!response.data){
                alert("No Data");
            }
            setBoard(response.data.board.flat());
            if(response.data.winner!=0){
                if(response.data.winner == 1){
                    alert("Human Win the Game")
                }else if(response.data.winner == 2){
                    alert("Bot Win the Game")
                }else{
                    alert("Game Draw !!")
                }
            }
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <>
            <h2> Playing game here </h2>

            <div className="bg-gray-500 w-[600px] h-[600px] grid grid-cols-3">

                {board.map((x, index) =>
                    (
                        <div onClick={() => callApi(index)} key={index}
                             className={`flex justify-center items-center border border-black text-sm w-[200px] h-[200px] font-bold text-gray-900`}>
                            {x == 1 && "X"} {x == 2 && "O"}
                        </div>
                    )
                )}


            </div>

        </>
    )
}

export default Temp;