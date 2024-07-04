import { ContentLeft } from "./componenets/ContentLeft"
import Header from "./componenets/Header"

function App() {
    return (
        <>
            <Header />
            <main className="md:h-[calc(100vh_-_5rem)] h-[calc(100svh_-_5rem)]">

                {/* change the grid cols if any error occurred */}
                <article
                    className="container relative grid gap-6 grid-cols-[minmax(0_1fr)] h-full overflow-y-auto before:content-[''] before:absolute before:bottom-0 before:h-[3rem] before:w-full before:pointer-events-none before:bg-gradient-1 before:z-[1]">

                    <ContentLeft />

                </article>
            </main>
        </>
    )
}

export default App
