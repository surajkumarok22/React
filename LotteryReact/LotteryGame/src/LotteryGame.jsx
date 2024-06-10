import { useState } from "react"
import "./Lottery.css"
import { genTicket, sum } from "./helper.js";


export default function LotteryGame(){
        let [ticket, setTicket] = useState(genTicket(3));

        let isWinning = sum(ticket) === 15;


let buyTicket = () => {
    setTicket(genTicket(3));
}

    return (
        <div>
            <h1>Lottery Game</h1>
            <div className="Ticket">
                <span>{ticket[0]}</span>
                <span>{ticket[1]}</span>
                <span>{ticket[2]}</span>
            </div>

            <button onClick={buyTicket}>Buy New Ticket</button>

            <h3>{isWinning && "Congratulation, you won!"}</h3>
        </div>
    );
}