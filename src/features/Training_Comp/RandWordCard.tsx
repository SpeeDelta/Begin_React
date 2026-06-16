import '@tanstack/react-query'
import {useQuery} from "@tanstack/react-query";


export default function RandWordCard()
{
    const {data, isLoading, isError } = useQuery({
        /*
        data => contient les infos retourné
        isLoading => boolean si la fonction est en train de chargé
        isError => si la requête renvoie des erreurs
         */
        queryKey: ['random-word'], //Un identifiant unique pour la query.
        queryFn: mockHttpCall, // Une fonction asynchrone qui effectue la requête pour récupérer les données.
        refetchInterval: 10000,
    })

    if (isLoading) return <h2>Loading...</h2>
    if (isError) return <h2>Error!</h2>

    return (
        <>
            <h2>{data}</h2>
        </>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export function mockHttpCall(): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            /*
            setTimeout attend un certain délai avant d’exécuter son callback.
               Ici, ça simule une requête réseau asynchrone
             */
            const random = randomString();
            resolve(random);
            /*
            Résout la promesse avec la valeur random.
            Toute personne qui fait await mockHttpCall() recevra ce nombre.
             */
        }, 200); // simulate latency
    });
}

// eslint-disable-next-line react-refresh/only-export-components
export function randomString() {
    const words = [
        'pomme',
        'banane',
        'cerise',
        'orange',
        'mangue',
        'kiwi',
        'fraise',
        'ananas',
        'melon',
        'citron',
        'nuage',
        'rivière',
        'forêt',
        'montagne',
        'soleil',
        'étoile',
        'planète',
        'océan',
        'jardin',
        'tempête'
    ];
    return words[Math.floor(Math.random() * words.length)];
}