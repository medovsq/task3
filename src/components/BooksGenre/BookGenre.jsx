import { useState } from "react"
import { BookReview } from "../BookReview/BookReview"
import styles from './styles.module.css'


export const Book = ({ book, handleClickProperBook }) => {
    const [count, setCount] = useState(0)
    return <div className={styles.root}>
        <div onClick={() => handleClickProperBook(book)}>
        <h4 className={styles.nameBook}>{book.name}</h4>
        <div className={styles.text}>{book.author}</div>
        <div className={styles.text}>{book.bookGenre}</div>
        <div className={styles.text}>{book.rating}</div>
        <div className={styles.price}>{book.price} ₽</div></div>
        <div className={styles.count}><button className={styles.buttonCount} onClick={() => setCount(count - 1)} disabled={count === 0}><p className={styles.buttonText}>-</p></button>
        {count}
        <button className={styles.buttonCount} onClick={() => setCount(count + 1)} disabled={count === 99}><p className={styles.buttonText}>+</p></button></div>

        
    </div>
}