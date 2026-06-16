// import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
/** import {
    useQuery,
   useMutation,
   useQueryClient,
   QueryClient,
   QueryClientProvider,
 } from '@tanstack/react-query'
*/

import RandNumbCard from "@/features/Training_Comp/RandNumbCard.tsx";
import RandNumbList from "@/features/Training_Comp/RandNumbList.tsx";
import RandWordCard from "@/features/Training_Comp/RandWordCard.tsx";
import Lorem from "@/features/Training_Comp/Lorem.tsx";

export default function App() {
    return (
        <>
            <div className="flex flex-row">
                <div className="basis-2/3">
                    <RandNumbCard/>
                </div>
                <div className="basis-1/3">
                    <RandNumbList/>
                </div>
            </div>
            <div className="flex flex-col">
                <div>
                    <RandWordCard/>
                </div>
            </div>
            <div className="columns-2">
                <div>
                    <Lorem/>
                </div>
                <div>
                    <Lorem/>
                </div>
            </div>
        </>
    );
}