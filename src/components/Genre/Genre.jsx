import { Books } from "../Books/Books"

export const Genre = ({genres, properBook, setProperBook}) => {
    return <div>
        <Books books = {genres.books} properBook={properBook} setProperBook={setProperBook} />
    </div>
}