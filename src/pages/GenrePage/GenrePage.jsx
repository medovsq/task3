import {Genre} from './../../components/Genre/Genre'
import {useState} from 'react'
import styles from './styles.module.css'
import { BookPage } from '../BookPage/BookPage';


export const  GenrePage = (props) => {
    const [activeGenre, setActiveGenre] = useState(props.genres[0]);
    
    // const bookReview = activeGenre.books


    return <div className={styles.backgraund}>
        <header className={styles.header}><p className={styles.headerText}>Магазин</p></header>
        <main className={styles.location}>
        <div className={styles.genreDiv}>
            {
                props.genres.map((genre) => <button className={styles.buttonStyle} key={genre.id} onClick={() => setActiveGenre(genre)}>{genre.name}</button>)
            }
        </div>
        <Genre genres={activeGenre}/>
        <BookPage activeGenre={activeGenre}/>
        </main>
        {/* <div>
            <h3>reviews</h3>
            <ul>
                {
                    bookReview.map((review) => <li key={review.id}>
                        <ul>{review.reviews.map((rev) => <li key={rev.id}>
                            <div>{rev.user.name}</div>
                            <div>{rev.text}</div>
                            <div>{rev.rating}</div>
                            </li>)}</ul>
                    </li>)
                }
            </ul>
        </div> */}
    </div>
}