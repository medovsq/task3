import { Book } from "../../components/Book/Book";


export const BookPage = ({ propBook }) => {
    console.log(propBook)
    const book = propBook;
    return <div>
        <div>
            <Book book={book} />
            <div><h2>Анотация</h2>
                <p>{book.about}</p></div>
        </div>


        <div className="review-container">
            <ul className="review-list">
                {book.reviews.map((item) => (
                    <li key={item.id} className="review-list__review">
                        {item.text}
                    </li>
                ))}
            </ul>
        </div>
    </div>
}