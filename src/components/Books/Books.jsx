import { Book } from "../Book/Book"
import styles from './styles.module.css'



export const Books = ({books}) => {

    console.log(books[0])

    return <div>
        <ul className={styles.list}>
            {
                books.map((book) => <li className={styles.listElement} key={book.id}>
                    <Book book={book}/>
                    </li>)
            }
        </ul>
    </div>
    }