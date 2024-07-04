export default function CurrentWeather() {
    return (
        <section aria-label="current-weather" className="mb-8">

            {/* current-weather-card */}
            <div className="card bg-surface card-lg">
                {/* card-title */}
                <h2 className="text-title-2 mb-3">Now</h2>

                {/* weapper */}
                <div className="my-4 flex gap-3 items-center">
                    <h3 className="text-heading text-white leading-[1.1]">25&deg;<sup>c</sup></h3>

                    <img src="./src/assets/weather_icons/01d.png" alt="different weather icon image" height={64} width={64} className="mx-auto" />

                </div>

                <p className="text-body-3 capitalize">Mostly Sunny</p>

                {/* meta-list */}
                <ul className="mt-7 pt-4 border-t-[1px] border-outline">
                    {/* meta-item */}
                    <li className="flex gap-3 mb-3">
                        <span className="m-icon">calendar_today</span>

                        {/* meta-text */}
                        <p className="text-title-3 font-semiBold text-surfaceVariantOn">Thursday 4, July</p>
                    </li>
                    <li className="flex gap-3">
                        <span className="m-icon">location_on</span>

                        {/* meta-text */}
                        <p className="text-title-3 font-semiBold text-surfaceVariantOn">London GB</p>
                    </li>
                </ul>
            </div>

        </section>
    )
}