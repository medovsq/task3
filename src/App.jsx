import { Layout } from "./components/Layout/Layout";
import { GenrePage } from "./pages/GenrePage/GenrePage";
import {genres} from "./constants/mock"
import { BookPage } from "./pages/BookPage/BookPage";


export function App() {
    return <Layout>
        <GenrePage genres={genres}/>
        <BookPage props={genres[0]}/>
    </Layout>
}