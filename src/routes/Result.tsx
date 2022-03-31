
import { useParams } from "react-router-dom";
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import Wrapper from '../components/Wrapper'
const queryClient = new QueryClient()

const Result = () => {
    let params = useParams()
    console.log(params.id)
    return (
        <QueryClientProvider client={queryClient}>
            <Wrapper id={params.id}/>

        </QueryClientProvider>
    )
}

export default Result