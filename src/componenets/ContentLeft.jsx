import CurrentWeather from "./CurrentWeather";
import Forecast from "./Forecast";

export function ContentLeft() {
    return (
        <div className="md:sticky md:top-0">

            {/* current weather, data-current-weather */}
            <CurrentWeather />

            {/* forecast */}
            <Forecast />

        </div>
    )
}