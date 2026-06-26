import {createFileRoute, useNavigate} from '@tanstack/react-router'
import {useState} from "react";
import {Input} from "@/Page/General/utils/input.tsx";
import {Button} from "@/Page/General/utils/button.tsx";

export const Route = createFileRoute('/pokemon/')({
    component: PokemonPage,
})

// eslint-disable-next-line react-refresh/only-export-components
function PokemonPage() {
    const navigate = useNavigate();
    const [id, setId] = useState("");

    const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const pokemonId = id.trim();
        if (!pokemonId) {
            return;
        }

        navigate({
            to: '/pokemon/$id',
            params: {id: pokemonId},
        });
    };

    return (
        <>
            <div>Hello ! </div>
            <form className="flex max-w-sm items-center gap-2" onSubmit={handleSearch}>
                <Input
                    id="pokemon"
                    type="number"
                    value={id}
                    onChange={(event) => setId(event.target.value)}
                    placeholder="ID du Pokemon"
                />
                <Button type="submit">Rechercher</Button>
            </form>
        </>
    )
}
