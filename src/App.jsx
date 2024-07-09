import { ContentLeft } from "./componenets/ContentLeft"
import ContentRight from "./componenets/ContentRight"
import Error from "./componenets/Error"
import Header from "./componenets/Header"
import Loading from "./componenets/Loading"

function App() {
    return (
        <>
            <Header />
            <main className="md:h-[calc(100vh-5rem)] h-[calc(100svh-6rem)] lg:h-[calc(100vh-8rem)]">

                {/* change the grid cols if any error occurred */}
                <article
                    className="container relative grid gap-6 grid-cols-[minmax(0,1fr)] md:pt-0 md:grid-cols-[27rem_minmax(0,1fr)] lg:grid-cols-[23rem_minmax(0,1fr)] md:gap-7 items-start h-full overflow-y-auto before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-[3rem] before:w-full before:pointer-events-none before:bg-gradient-1 before:-z-[1]">

                    <ContentLeft />
                    <ContentRight />

                    {/* display-grid to be passed while data fetching */}
                    <Loading />
                </article>
            </main>

            <Error />
        </>
    )
}

export default App
