export const  GenrePage = (props) => {
    const activeGenre = props.genres[0];
    const bookReview = activeGenre.books
    return <div>
        <h2>{activeGenre.name}</h2>
        <div>
            <h3>Books</h3>
            <ul>
                {
                    activeGenre.books.map((book) => <li key={book.id}>{book.name}</li>)
                }
            </ul>
        </div>
        <div>
            <h3>reviews</h3>
            <ul>
                {
                    bookReview.reviews?.map((review) => <li key={review.id}>
                        <div>{review.text}</div>
                    </li>)
                }
            </ul>
        </div>
    </div>
}