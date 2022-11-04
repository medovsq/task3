import styles from './styles.module.css'

export const BookReview = ({book}) => {
    const reviews = book.reviews
    console.log(reviews)
    return <div>
        <ul>
            {reviews.map((review) => <li className={styles.reviewStyleDiv} key={review.id}>
                    <div className={styles.reviewHeader}>
                        <h4>{review.user.name}</h4>
                        <p>Оценка: {review.rating}</p>
                    </div>
                    <p>{review.text}</p>
                </li>)}
        </ul>
    </div>
}