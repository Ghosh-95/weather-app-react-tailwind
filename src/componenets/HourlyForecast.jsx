function SliderListTemp({ time, img, value }) {
    return (
        <li className="min-w-28 md:min-w-40 flex-grow flex-shrink basis-full">
            <div className="card card-sm bg-surface text-center">
                <p className="text-body-3">{time}</p>

                <img src={`./src/assets/weather_icons/${img}`} alt="weather-icon" loading="lazy" width={40}
                    height={40}
                    className="mx-auto my-3" />

                <p className="text-body-3">{value}&deg;</p>
            </div>
        </li>
    )
};

function SliderListWind({ time, img, value }) {
    return (
        <li className="min-w-28 md:min-w-40 flex-[1_1_100%]">
            <div className="card card-sm bg-surface text-center">
                <p className="text-body-3">{time}</p>

                <img src={`./src/assets/weather_icons/${img}`} alt="weather-icon" loading="lazy" width={40}
                    height={40}
                    className="mx-auto my-3" />

                <p className="text-body-3">{value}km/h</p>
            </div>
        </li>
    )
}


export default function HourlyForecast() {
    return (
        <section className="mb-8" aria-label="hourly-forecast">
            <h2 className="text-title-2 md:mb-4">Today at</h2>

            {/* slider-container */}
            <div className="-mx-4 md:ml-3 overflow-x-auto sd-container w-full">

                {/* slider-list, data-temp */}
                <ul className="flex gap-4 md:before:hidden md:after:min-w-3 after:content-[''] after:min-w-1 before:content-[''] before:min-w-1 my-5">
                    {/* card, card-sm, slider-card */}
                    <SliderListTemp time={"03 PM"} img={"01n.png"} value={25} />
                    <SliderListTemp time={"03 PM"} img={"01n.png"} value={25} />
                    <SliderListTemp time={"03 PM"} img={"01n.png"} value={25} />
                    <SliderListTemp time={"03 PM"} img={"01n.png"} value={25} />
                    <SliderListTemp time={"03 PM"} img={"01n.png"} value={25} />
                    <SliderListTemp time={"03 PM"} img={"01n.png"} value={25} />
                    <SliderListTemp time={"03 PM"} img={"01n.png"} value={25} />
                    <SliderListTemp time={"03 PM"} img={"01n.png"} value={25} />
                    <SliderListTemp time={"03 PM"} img={"01n.png"} value={25} />
                    <SliderListTemp time={"03 PM"} img={"01n.png"} value={25} />
                    <SliderListTemp time={"03 PM"} img={"01n.png"} value={25} />
                    <SliderListTemp time={"03 PM"} img={"01n.png"} value={25} />
                </ul>

                {/* slider-list, data-temp */}
                <ul className="flex gap-4 after:content-[''] after:min-w-1 before:content-[''] before:min-w-1 my-5 md:before:hidden md:after:min-w-3">
                    <SliderListWind time={"03 PM"} img={"direction.png"} value={10} />
                    <SliderListWind time={"03 PM"} img={"direction.png"} value={10} />
                    <SliderListWind time={"03 PM"} img={"direction.png"} value={10} />
                    <SliderListWind time={"03 PM"} img={"direction.png"} value={10} />
                    <SliderListWind time={"03 PM"} img={"direction.png"} value={10} />
                    <SliderListWind time={"03 PM"} img={"direction.png"} value={10} />
                    <SliderListWind time={"03 PM"} img={"direction.png"} value={10} />
                    <SliderListWind time={"03 PM"} img={"direction.png"} value={10} />
                    <SliderListWind time={"03 PM"} img={"direction.png"} value={10} />
                    <SliderListWind time={"03 PM"} img={"direction.png"} value={10} />
                    <SliderListWind time={"03 PM"} img={"direction.png"} value={10} />
                    <SliderListWind time={"03 PM"} img={"direction.png"} value={10} />
                </ul>
            </div>
        </section>
    )
}