import { Books } from "../Books/Books"

export const Genre = ({genres}) => {
    return <div>
        <Books books = {genres.books}/>
    </div>
}