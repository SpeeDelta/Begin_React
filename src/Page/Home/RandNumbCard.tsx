//import {useEffect, useState} from "react";
import '@tanstack/react-query'
import {useQuery} from "@tanstack/react-query";


export default function RandNumbCard()
{
    // Sans Tanstack Query
    /**

     const nb = Math.random();

     useEffect(() => {
     const interval = setInterval(() => setNb(Math.random()), 3000);
     return () => {
     clearInterval(interval);
     };
     }, []);
     */

    // avec Tanstack query
    // Simulate an async HTTP call
        // une Query => Requête qui va fetch des données sur un serveur
    const {data, isLoading, isError } = useQuery({
        /*
        data => contient les infos retourné
        isLoading => boolean si la fonction est en train de chargé
        isError => si la requête renvoie des erreurs
         */
            queryKey: ['random-number'], //Un identifiant unique pour la query.
            queryFn: mockHttpCall, // Une fonction asynchrone qui effectue la requête pour récupérer les données.
            refetchInterval: 3000,
        })

    if (isLoading) return <h2>Loading...</h2>
    if (isError) return <h2>Error!</h2>

    return (
        <h2 className="text-4xl font-bold">{data}</h2>
    );
}


// eslint-disable-next-line react-refresh/only-export-components
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