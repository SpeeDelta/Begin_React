import {createFileRoute} from "@tanstack/react-router";
import RandNumbCard from "./RandNumbCard.tsx";
import RandNumbList from "./RandNumbList.tsx";
import RandWordCard from "./RandWordCard.tsx";
import Lorem from "./Lorem.tsx";
import {Card, CardContent} from "@/Page/General/utils/card.tsx";

export const Route = createFileRoute("/")({
    component: HomePage,
});

// eslint-disable-next-line react-refresh/only-export-components
function HomePage() {
    return (
        <div className="min-h-screen bg-muted/30 p-4">
            <div className="mx-auto flex w-full max-w-6xl flex-col gap-6">
                <h1 className="text-2xl font-semibold">Home</h1>
                <div className="flex w-full flex-col gap-4 md:flex-row">
                    <Card className="w-full shadow-lg md:w-2/3">
                        <CardContent className="p-6 text-center">
                            <RandNumbCard/>
                        </CardContent>
                    </Card>
                    <Card className="w-full shadow-lg md:w-1/3">
                        <CardContent className="p-6 text-center">
                            <RandNumbList/>
                        </CardContent>
                    </Card>
                </div>
            </div>
            <div className="flex flex-col">
                <RandWordCard/>
            </div>
            <div className="columns-2">
                <Lorem/>
                <Lorem/>
            </div>
        </div>
    );
}