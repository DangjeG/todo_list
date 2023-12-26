import {QueryClient, QueryClientProvider} from "react-query";

import {MainPage} from "./components/MainPage";


const queryClient = new QueryClient()

function App() {

    return(
        <QueryClientProvider client={queryClient}>
            <MainPage/>
        </QueryClientProvider>)

}

export default App;
