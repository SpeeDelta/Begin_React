import { createFileRoute } from '@tanstack/react-router'
import {queryOptions} from "@tanstack/react-query";

export const Route = createFileRoute('/about')({
    component: About,
})

function About() {
    return <div className="p-2">Hello from About!</div>
}

// src/routes/posts.tsx
const getQueryOptions = queryOptions({
    queryKey: ['number'],
    queryFn: () => mockHttpCall(),
})


 
export function mockHttpCall(): Promise<number> {
    return new Promise((resolve) =>
    {
        setTimeout(() => {
            /*
            setTimeout attend un certain délai avant d’exécuter son callback.
               Ici, ça simule une requête réseau asynchrone
             */
            const random = Math.floor(Math.random() * 100); // 0–99
            /**
             * Math.random() donne un nombre décimal entre 0 inclus et 1 exclu.
             * * 100 transforme ça en intervalle [0, 100[.
             * Math.floor(...) retire la partie décimale => entier entre 0 et 99.
             * Le commentaire // 0–99 confirme cet intervalle.
             */
            resolve(random);
            /*
            Résout la promesse avec la valeur random.
            Toute personne qui fait await mockHttpCall() recevra ce nombre.
             */
        }, 200); // simulate latency
    });
}

/*
Sur cette page => nb aléatoire
(pr aller chercher un nb random un Loader qui va utiliser TanStack Query pr résoudre ce nb)
 */