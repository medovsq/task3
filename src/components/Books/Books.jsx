import { Book } from "../Book/Book"
import styles from './styles.module.css'
import React, { useState } from 'react'
// import {Link} from 'react-router-dom'
import { BookPage } from '../../pages/BookPage/BookPage';



export const Books = ({books, properBook, setProperBook}) => {

    // const [properBook, setProperBook] = useState(books[0])

    const handleClickProperBook = (book) => {
        setProperBook(book);
    }


    return <div>
        <ul className={styles.list}>
            {
                books.map((book) => <li className={styles.listElement} key={book.id}>
                    <Book book={book} handleClickProperBook={handleClickProperBook}/>
                    </li>)
            }
        </ul>
    </div>
    }