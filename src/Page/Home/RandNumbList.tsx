import '@tanstack/react-query'
import {useQuery} from "@tanstack/react-query";

export default function RandNumbList()
{
    const {data, isLoading, isError } = useQuery({
        /*
        data => contient les infos retourné
        isLoading => boolean si la fonction est en train de chargé
        isError => si la requête renvoie des erreurs
         */
        queryKey: ['random-number-list'], // Clé différente de RandNumbCard pour avoir un cache indépendant.
        queryFn: mockHttpCall, // Une fonction asynchrone qui effectue la requête pour récupérer les données.
        refetchInterval: 5000,
    })

    if (isLoading) return <h2>Loading...</h2>
    if (isError) return <h2>Error!</h2>

    return (
        <ul className="mx-auto list-inside list-disc text-center">
            {Array.isArray(data) && data.map((nb, index) => (
                <li key={index}>{nb}</li>
            ))}
        </ul>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export function mockHttpCall(): Promise<number[]> {
    return new Promise((resolve) => {
        setTimeout(() => {
            /*
            setTimeout attend un certain délai avant d'exécuter son callback.
               Ici, ça simule une requête réseau asynchrone
             */
            const randoms = Array.from({ length: 3 }, () => Math.floor(Math.random() * 100)); // 3 nombres entre 0 et 99
            /**
             * Array.from({ length: 3 }, ...) crée un tableau de 3 éléments.
             * Pour chaque élément, on génère un Math.floor(Math.random() * 100).
             * On obtient donc 3 entiers indépendants entre 0 et 99.
             */
            resolve(randoms);
            /*
            Résout la promesse avec le tableau de 3 nombres.
            Toute personne qui fait await mockHttpCall() recevra ce tableau.
             */
        }, 200); // simulate latency
    });
}