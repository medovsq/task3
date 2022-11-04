import { Book } from "../Book/Book"
import React, { useState } from 'react'
import { BookPage } from '../../pages/BookPage/BookPage';



export const Books = ({books}) => {

    const [properBook, setProperBook] = useState(books[0])

    const handleClickProperBook = (book) => {
        setProperBook(book);
    }

    console.log(properBook);

    return <div>
        <ul className={styles.list}>
            {
                books.map((book) => <li key={book.id}>
                    <Book book={book} handleClickProperBook={handleClickProperBook}/>
                    </li>)
            }
        </ul>

        <BookPage propBook={properBook} />
    </div>
    }