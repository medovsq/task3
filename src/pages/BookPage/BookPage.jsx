import { Book } from "../../components/Book/Book";


export const BookPage = ({ properBook }) => {
    const book = properBook;
    console.log(book)
    return <div>
        <div>
            <Book book={properBook} />
            <div><h2>Анотация</h2>
                <p>{properBook.about}</p></div>
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