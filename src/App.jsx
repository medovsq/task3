import { Layout } from "./components/Layout/Layout";
import { GenrePage } from "./pages/GenrePage/GenrePage";
import {genres} from "./constants/mock"

export function App() {
    return <Layout>
        <GenrePage genres={genres}/>
    </Layout>
}