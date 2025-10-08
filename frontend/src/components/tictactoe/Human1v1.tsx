import {useState,useRef,useEffect} from "react";
import {useParams} from 'react-router-dom';
import {io,Socket} from 'socket.io-client'

const Human1v1 = () => {

    const gameId= useParams();
    const socket=useRef<Socket|null>(null);

    const [board, setBoard] = useState<number[]>([0, 0, 0, 0, 0, 0, 0, 0, 0]);

    useEffect(() => {
        socket.current=io(`${import.meta.env.VITE_BACKEND_URL}`);

        socket.current.on("connect", () => {
            console.log("connected", socket.current?.id);
        });


        return () => {
            if(socket.current)
            socket.current.disconnect();
        };
    }, []);

    const Move=(index:number)=>{
          if(!socket.current)return;

          socket.current.on("move",()=>{
              console.log("move", index,gameId);
          })

        socket.current.emit("oppnent",(board:number[])=>{
            setBoard(board)
        })
    }


    return (
        <>

            <div className="bg-gray-500 w-[600px] h-[600px] grid grid-cols-3">

                {board.map((x, index) =>
                    (
                        <div onClick={() => Move(index)} key={index}
                             className={`flex justify-center items-center border border-black text-sm w-[200px] h-[200px] font-bold text-gray-900`}>
                            {x == 1 && "X"} {x == 2 && "O"}
                        </div>
                    )
                )}


            </div>

        </>
    )
}

export default Human1v1;