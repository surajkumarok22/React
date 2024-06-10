import { useState } from "react"
import "./Lottery.css"
import { genTicket, sum } from "./helper.js";


export default function LotteryGame({ n =3 , WinningSum = 15}){
        let [ticket, setTicket] = useState(genTicket(n));

        let isWinning = sum(ticket) === WinningSum;


let buyTicket = () => {
    setTicket(genTicket(n));
}

    return (
        <div>
            <h1>Lottery Game</h1>
           <h1><Ticket  ticket = {ticket}/></h1>
            <button onClick={buyTicket}>Buy New Ticket</button>

            <h3>{isWinning && "Congratulation, you won!"}</h3>
        </div>
    );
}