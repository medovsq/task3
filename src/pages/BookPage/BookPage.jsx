import { Book } from "../../components/Book/Book";
import styles from './styles.module.css'
import {Link} from 'react-router-dom'
import {BookReview} from './../../components/BookReview/BookReview'


export const BookPage = ({ properBook }) => {
    const book = properBook;
    console.log(book)
    return <div className={styles.backgraund}>
        <header className={styles.header}>
            <Link className={styles.linkStyle} to='/'> <p className={styles.headerText}>Магазин</p></Link>
        </header>
        <div className={styles.bookInfo}>
            <Book book={properBook} />
            <div className={styles.bookInfoText}><h2>Анотация</h2>
                <p>{properBook.about}</p></div>
        </div>
        <div className={styles.bookReviewDivStyles}>
            <BookReview book={properBook}/>
        </div>


        <div className="review-container">
            <ul className="review-list">
                {/* {book.reviews.map((item) => (
                    <li key={item.id} className="review-list__review">
                        {item.text}
                    </li>
                ))} */}
            </ul>
        </div>
    </div>
}