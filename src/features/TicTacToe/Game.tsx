//Gère l'historique des moves
import {type SetStateAction, useState} from "react";
import Board from "./Board.tsx";

export default function Game() {
    const [history, setHistory] = useState([Array(9).fill(null)]); // The history of moves
    const [currentMove, setCurrentMove] = useState(0); // Which step the User is viewing
    const xIsNext = currentMove % 2 === 0;
    //1 Item => 1 Array => 9 entry


    // Pr render les squares du current move il faut lire les squares du move précédent
    const currentSquares = history[currentMove];

    // Enfaite qd tu clique sur les boutons (Go to Move) tu reset la partie à ce move et tu peux remettre un autre pions

    // update Game’s state to trigger a re-render,
    function handlePlay(nextSquares: any[]) {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        //history.slice(0, currentMove + 1) : garde l’historique jusqu’au coup courant inclus.
        // nextSquares : ajoute le nouveau plateau juste après.
        setHistory(nextHistory); // setHistory(nextHistory) : remplace l’historique par cette nouvelle “branche”.
        //want to append the history by appending the updated squares
        //  creates a new array that contains all the items in history, followed by nextSquares
        setCurrentMove(nextHistory.length - 1);
        //place le curseur sur le dernier coup (celui qu’on vient de jouer).
    }

    function jumpTo(nextMove: SetStateAction<number>) {
        setCurrentMove(nextMove);
    }


    const moves = history.map((_squares, move) => {
        let description;
        if (move > 0) {
            description = 'Go to move #' + move;
        } else {
            description = 'Go to game start';
        }
        return (
            <li key={move}>
                <button onClick={() => jumpTo(move)}>{description}</button>
            </li>
        );
    });

    return (
        <div className="game">
            <div className="game-board">
                <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
            </div>
            <div className="game-info">
                <ol>{moves}</ol>
            </div>
        </div>
    );
}