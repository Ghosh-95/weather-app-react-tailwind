export default function Footer() {
    return (
        <footer className="flex flex-wrap justify-center items-center text-surfaceVariantOn text-center gap-[1rem_2rem] mt-8 md:mb-8">
            <p className="text-body-3">Copyright &copy; by Sushovan. All rights reserved.</p>

            <p className="text-body-3 flex flex-wrap justify-center items-center"> Powered by
                <a href="https://openweathermap.org/api" title="Free Openweather API" target="_blank" rel="noopener">
                    <img src="../src/assets/openweather.png" alt="Openweather API logo" width={150} height={30} loading="lazy" />
                </a>
            </p>
        </footer>
    )
}