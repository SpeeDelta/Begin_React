// // Gère la logique d'une case
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
export default function Square({value, onSquareClick}) {
    return (
        <button className="square" onClick={onSquareClick}>
            {value}
        </button>
    );
}