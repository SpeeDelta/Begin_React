import { createFileRoute } from '@tanstack/react-router'
import {getPokemon} from "@/api/pokemon.ts";

export const Route = createFileRoute('/pokemon/$id')({
  component: Pokemon,
  loader: async ({ params }) => await getPokemon(params.id)
})

// eslint-disable-next-line react-refresh/only-export-components
function Pokemon() {
  const {id} = Route.useParams();
  const pokemon = Route.useLoaderData();
  console.log(pokemon)
  return (
      <>
        <div>
          <h2>
            ({id}) {pokemon.name}
          </h2>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          <dl>
            <dt> Height </dt>
            <dd> {pokemon.weight}</dd>
            <dt >Weight</dt>
            <dd>{pokemon.weight}</dd>
          </dl>
        </div>
      </>
  );
}
