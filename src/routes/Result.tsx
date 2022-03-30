

import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import Wrapper from '../components/Wrapper'
const queryClient = new QueryClient()

const Result = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <Wrapper />

        </QueryClientProvider>
    )
}

export default Result