export const BookPage = (props) => {
    console.log(props)
    const book = props.activeGenre.books[0]
    return <div>
        <h2>Анотация</h2>
        <p>{book.name}</p>
    </div>
}