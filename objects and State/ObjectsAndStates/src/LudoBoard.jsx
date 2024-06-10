import { useState } from "react";

export default function  LudoBoard(){
    let [moves, setMoves] = useState({blue: 0, yellow: 0, green: 0, red: 0});

    let updateBlue = () => {
        moves.blue += 1;
        console.log(moves);
        setMoves({...moves});
    }


    let updateYellow = () => {
        moves.yellow += 1;
        console.log(moves);
        setMoves({...moves});
    }

    let updategreen = () => {
        moves.green += 1;
        console.log(moves);
        setMoves({...moves});
    }

    let updatered = () => {
        moves.red += 1;
        console.log(moves);
        setMoves({...moves});
    }

    return (
      <div>
        <p>
            Game begins!
        </p>

          <div className="board">
              <p>Blue Moves = {moves.blue}</p>
              <button style={{backgroundColor: "blue"}} onClick={updateBlue}>+1</button>

              <p>Yellow Moves = {moves.yellow}</p>
              <button style={{backgroundColor: "yellow"}} onClick={updateYellow}>+1</button>

              <p>Green Moves = {moves.green}</p>
              <button style={{backgroundColor: "green"}}  onClick={updategreen}>+1</button>

              <p>Red Moves = {moves.red}</p>
              <button style={{backgroundColor: "red"}} onClick={updatered}>+1</button>

           </div>



      </div>
    );
}