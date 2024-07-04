export default function Forecast() {
    return (
        <section className="mb-6" aria-labelledby="forecast-label">
            <h2 id="forecast-label" className="text-title-2 font-semiBold mb-2">5 Days Forecast</h2>

            {/* {forecast-card} */}
            <div className="card bg-surface card-lg">
                <ul>
                    {/* card-item */}
                    <li className="flex items-center mb-7 last-of-type:mb-0">

                        {/* icon-wrapper */}
                        <div className="flex items-center gap-3">
                            <img src="./src/assets/weather_icons/01n.png" alt="semi half moon image" width={36} height={36} />

                            <span className="span">
                                <p className="text-title-2 mb-0">25</p>
                            </span>
                        </div>

                        <p className="text-label-1 text-surfaceVariantOn font-semiBold w-full text-right">4 July</p>
                        <p className="text-label-1 text-surfaceVariantOn font-semiBold w-full text-right">Thursday</p>

                    </li>
                </ul>
            </div>
        </section>
    );
};