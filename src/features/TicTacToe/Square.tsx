
// // Gère la logique d'une case
// @ts-ignore
export default function Square({value, onSquareClick}) {
    return (
        <button className="square" onClick={onSquareClick}>
            {value}
        </button>
    );
}