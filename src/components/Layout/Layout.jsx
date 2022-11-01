export const Layout = (props) => {
    return <div>
        <header></header>
        <main>
            { props.children }
            { props.a }
        </main>
        <footer></footer>
    </div>
}