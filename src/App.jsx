import { Layout } from "./components/Layout/Layout";
import { GenrePage } from "./pages/GenrePage/GenrePage";
import {genres} from "./constants/mock"
import {useState} from 'react'
// import { BookPage } from "./pages/BookPage/BookPage";
// import {Route, Routes, Link} from 'react-router-dom'
// import { BookPage } from "./pages/BookPage/BookPage";



export function App() {
    const [properBook, setProperBook] = useState({})
    
    return <Layout>
        <GenrePage genres={genres} properBook={properBook} setProperBook={setProperBook}/>
        {/* <BookPage propBoo={''}/> */}
        {/* <BookPage propBook={genres[0]}/> */}
    </Layout>
}