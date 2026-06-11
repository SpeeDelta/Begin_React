import {useState } from "react";

type Product = {
    title: string;
    id: number;
};

function isFruit(product: Product): boolean {
    const fruits = new Set(["Apple", "Banana", "Orange"]);
    return fruits.has(product.title);
}

export default function ListGroup() {
    const products: Product[] = [
        { title: "Cabbage", id: 1 },
        { title: "Garlic", id: 2 },
        { title: "Apple", id: 3 },
    ];

    //Hook
    const [selectedProduct, setSelectedProductIndex] = useState(-1);

    /**
     * Syntaxe d'une fonction avec React
     *
     * const getMessage = () => {
     *     if (isFruit(product)) {
     *     return "This is a fruit.";
     *     } else {
     *         return "This is a vegetable.";
     *     }
     * }
     */

    const listItems = products.map((product) => (
        <li className={selectedProduct === product.id ? "list-group-item active" : "list-group-item"}
            key={product.id}
            style={{
                color: isFruit(product) ? "bold hotpink" : "bold white",
            }}
            onClick={() => {setSelectedProductIndex(product.id)}}
        >
            {product.title}
        </li>
    ));

    return (
        <>
            <h1>List Group</h1>
            <ul className={"list-group"}>
                {listItems}
            </ul>
        </>
    );
}