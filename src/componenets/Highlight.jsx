function HighlightCards({ type, icon, value, unit, position }) {
    return (
        <div className="card card-sm relative bg-black-alpha-10">
            <h3 className="text-title-3 mb-7 font-semiBold text-surfaceVariantOn">{type}</h3>

            {/* wrapper */}
            <div className="flex items-center justify-between gap-4">
                <span className="m-icon">{icon}</span>

                <p className="text-title-1 md:text-[2.4rem]">{value}{type === "Humidity" ? <sup>{unit}</sup> : type === "Feels Like" ? <sup>&deg;c</sup> : <sub>{unit}</sub>}</p>
            </div>
        </div>
    )
}


export default function Highlight() {
    return (
        <section className="highlights mb-8 lg:relative lg:-z-10" aria-labelledby="highlight-label">
            <div className="card bg-surface card-lg">

                <h2 className="text-title-2 md:mb-4 font-semiBold" id="highlight-label">Today's Highlight</h2>

                {/* highlight list */}
                <article className="grid gap-8 md:grid-cols-[1fr_1fr] lg:grid-cols-4">
                    {/* highlight card, one */}
                    <div className="card card-sm relative bg-black-alpha-10 md:col-span-2">
                        <h3 className="text-title-3 mb-7 font-semiBold text-surfaceVariantOn">Air Quality Index</h3>

                        {/* wrapper */}
                        <div className="flex items-center justify-between gap-4">
                            <span className="m-icon">air</span>

                            {/* card-list */}
                            <ul className="flex items-center flex-wrap gap-y-3 flex-grow">
                                {/* card-item */}
                                <li className="flex items-center justify-end w-1/2 md:w-1/4 md:flex-col-reverse gap-2">
                                    <p className="text-title-1 md:text-[2.4rem]">23</p>

                                    <p className="text-label-1 text-surfaceVariantOn">PM <sub>2.5</sub></p>
                                </li>
                                <li className="flex items-center justify-end w-1/2 md:w-1/4 md:flex-col-reverse gap-2">
                                    <p className="text-title-1 md:text-[2.4rem]">23</p>

                                    <p className="text-label-1 text-surfaceVariantOn">PM <sub>2.5</sub></p>
                                </li>
                                <li className="flex items-center justify-end w-1/2 md:w-1/4 md:flex-col-reverse gap-2">
                                    <p className="text-title-1 md:text-[2.4rem]">23</p>

                                    <p className="text-label-1 text-surfaceVariantOn">PM <sub>2.5</sub></p>
                                </li>
                                <li className="flex items-center justify-end w-1/2 md:w-1/4 md:flex-col-reverse gap-2">
                                    <p className="text-title-1 md:text-[2.4rem]">23</p>

                                    <p className="text-label-1 text-surfaceVariantOn">PM <sub>2.5</sub></p>
                                </li>
                            </ul>
                        </div>

                        <span className="absolute right-4 top-4 p-[0.1rem_1rem] font-semiBold cursor-help rounded-pill aqi-1 text-label-1">Good</span>
                    </div>

                    {/* highlight-card, two */}
                    <div className="card card-sm relative bg-black-alpha-10 md:col-span-2">
                        <h3 className="text-title-3 mb-7 font-semiBold text-surfaceVariantOn">Sunrise and Sunset</h3>

                        {/* card-list */}
                        <div className="flex items-center flex-wrap gap-y-3 flex-grow">
                            {/* card-item */}
                            <div className="flex items-center justify-start flex-wrap w-1/2 gap-[0.5rem_1rem]">
                                <span className="m-icon">clear_day</span>

                                <div>
                                    <p className="text-label-1 mb-3">Sunrise</p>
                                    <p className="text-title-2 md:mb-4">06:02 AM</p>
                                </div>
                            </div>
                            <div className="flex items-center justify-start flex-wrap w-1/2 gap-[0.5rem_1rem]">
                                <span className="m-icon">clear_night</span>

                                <div>
                                    <p className="text-label-1 mb-3">Sunrset</p>
                                    <p className="text-title-2 md:mb-4">05:02 PM</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* highlight-card */}
                    <HighlightCards type={"Humidity"} value={35} unit={'%'} icon={'humidity_percentage'} />

                    {/* highlight-card */}
                    <HighlightCards type={"Pressure"} value={1050} unit={'hpa'} icon={'airwave'} />

                    {/* highlight-card */}
                    <HighlightCards type={"Visibility"} value={10} unit={'km'} icon={'visibility'} />

                    {/* highlight-card */}
                    <HighlightCards type={"Feels Like"} value={25} unit={'deg'} icon={'thermostat'} />

                </article>
            </div>
        </section>
    )
}