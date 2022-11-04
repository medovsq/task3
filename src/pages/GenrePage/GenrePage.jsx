import { Genre } from './../../components/Genre/Genre'
import { useState } from 'react'
import styles from './styles.module.css'



export const GenrePage = ({properBook, setProperBook, genres}) => {
    const [activeGenre, setActiveGenre] = useState(genres[0]);
    console.log(properBook, setProperBook(), 'GenrePage')

    // const bookReview = activeGenre.books


    return <div className={styles.backgraund}>
        <header className={styles.header}>
            <p className={styles.headerText}>Магазин</p>
        </header>
        <main className={styles.location}>
            <div className={styles.genreDiv}>
                {
                    genres.map((genre) => <button className={styles.buttonStyle} key={genre.id} onClick={() => setActiveGenre(genre)}>{genre.name}</button>)
                }
            </div>
            <Genre genres={activeGenre}  />
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