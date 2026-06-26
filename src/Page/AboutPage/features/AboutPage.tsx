import {createFileRoute} from "@tanstack/react-router";
import {useQuery} from "@tanstack/react-query";
import {mockHttpCall} from "@/Page/Home/RandNumbCard.tsx";

export const Route = createFileRoute("/about")({
    component: AboutPage,
});



// eslint-disable-next-line react-refresh/only-export-components
function AboutPage() {
    const {data, isLoading, isError } = useQuery({
        queryKey: ['random-number'], //Un identifiant unique pour la query.
        queryFn: mockHttpCall, // Une fonction asynchrone qui effectue la requête pour récupérer les données.
        refetchInterval: 3000,
    })

    if (isLoading) return <h2>Loading...</h2>
    if (isError) return <h2>Error!</h2>
    return (
        <>
            <h1 className="avatar">About</h1>
            <p>Hello there.<br />How do you do? <br/> Here is a random number : </p>
            <p> {data} </p>
        </>
    );
}