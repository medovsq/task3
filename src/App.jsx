import { Routes, Route, useNavigate } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { GenrePage } from "./pages/GenrePage/GenrePage";
import {genres} from "./constants/mock"
import {useState} from 'react'
import { BookPage } from "./pages/BookPage/BookPage";
import { testBook } from "./constants/mock";

// import {Route, Routes, Link} from 'react-router-dom'
// import { BookPage } from "./pages/BookPage/BookPage";



export function App() {
    const [properBook, setProperBook] = useState(testBook);
    const navigate = useNavigate();

    const handleSetProperBook = (book) => {
        setProperBook(book);
        navigate('/book');
    }

    console.log(properBook);
    
    return <Layout>
        <Routes>
          <Route element={<GenrePage genres={genres} properBook={properBook} setProperBook={handleSetProperBook}/>} path={'/'}/>
          <Route element={<BookPage properBook={properBook} />} path={'/book'} />
        </Routes>
    </Layout>
}