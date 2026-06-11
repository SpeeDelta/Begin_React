//import {useEffect, useState} from "react";
import '@tanstack/react-query'
import {useQuery} from "@tanstack/react-query";


export default function RandNumbCard()
{
    // Sans Tanstack Query

     const nb = Math.random();
    /**
     useEffect(() => {
     const interval = setInterval(() => setNb(Math.random()), 3000);
     return () => {
     clearInterval(interval);
     };
     }, []);
     */

    // avec Tanstack query
    /**
    function queryFn()
    {
        return Math.random();
    }

    */
    // Simulate an async HTTP call
    const { data, isLoading, isError } = useQuery({
            queryKey: ['random-number', nb],
            queryFn: mockHttpCall,
            refetchInterval: 3000,
        })

    if (isLoading) return <h2>Loading...</h2>
    if (isError) return <h2>Error</h2>

    return (
        <>
            <div>
                <h2>{data}</h2>
            </div>
        </>
    );
}

export function mockHttpCall(): Promise<number> {
    return new Promise((resolve) => {
        setTimeout(() => {
            const random = Math.floor(Math.random() * 100); // 0–99
            resolve(random);
        }, 200); // simulate latency
    });
}