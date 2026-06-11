// Gère la logique du jeu Tic Tac Toe
// @ts-ignore
import Square from "./Square.tsx";

// @ts-ignore
export default function Board({ xIsNext, squares, onPlay }) {
    // view it like [null, null, null, null, null, null, null, null, null]

    /**
     * Creates a copy of the squares array (nextSquares) with the JavaScript slice() Array method. Then, handleClick updates the nextSquares array to add X to the first ([0] index) square.
     * Calling the setSquares function lets React know the state of the component has changed. This will trigger a re-render of the components that use the squares state (Board) as well as its child components (the Square components that make up the board).
     *
     */

    /**
     * react-dom-client.development.js:7747
     *  Uncaught Error: Too many re-renders. React limits the number of renders to prevent an infinite loop.
     *  => You run handleCLick before clicking
     */
    /**
     *
     * @param i
     */
    function handleClick(i: number) {
        if (squares[i] || calculateWinner(squares)) {
            return;
        }
        //  If the square is already filled, you will return in the handleClick function early—before it tries to update the board state.
        const nextSquares = squares.slice();
        if (xIsNext)
        {
            nextSquares[i] = "X";
        }
        else
        {
            nextSquares[i] = "O";
        }
        onPlay(nextSquares);
    }
    //update the squares array holding your board’s state

    const isCompleted = squares.every((square: null) => square !== null);

    const winner = calculateWinner(squares);
    let status;
    if (winner) {
        status = "Winner: " + winner;
    } else if(isCompleted) {
        status = "Draw !";
    } else {
        status = "Next player: " + (xIsNext ? "X" : "O");
    }


//When the square is clicked, the code after the => “arrow” will run, calling handleClick(0).
    return (
        <>
            <div className="status">{status}</div>
            <div className="board-row">
                <Square value={squares[0]} onSquareClick={() => handleClick(0)}/>
                <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
                <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
            </div>
            <div className="board-row">
                <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
                <Square value={squares[4]} onSquareClick={() => handleClick(4)}/>
                <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>
            </div>
            <div className="board-row">
                <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
                <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>
                <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>
            </div>
        </>
    );
}

function calculateWinner(squares: any[]) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

/**
 * 1. Clicking on the upper left square runs the function that the button received as its onClick prop from the Square.
 *      The Square component received that function as its onSquareClick prop from the Board.
 *      The Board component defined that function directly in the JSX. It calls handleClick with an argument of i.
 *
 * 2. handleClick uses the argument (i) to update the first element of the squares array from null to X.
 *
 * 3. The squares state of the Board component was updated, so the Board and all of its children re-render.
 * This causes the value prop of the Square component with index 0 to change from null to X.
 */