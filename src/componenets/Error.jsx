export default function Error() {
    return (
        // add flex to show error
        <section className="fixed top-0 h-[100svh] w-full hidden justify-center items-center flex-col gap-3 md:h-[100vh] bg-background z-20">
            <h2 className="text-heading leading-[1.1] text-white">404</h2>
            <p className="text-body-1">Data not found!</p>

            <a href="#" className="btn-primary">
                <span className="span">Go Home</span>
            </a>
        </section>
    )
}