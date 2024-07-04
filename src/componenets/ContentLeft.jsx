import CurrentWeather from "./CurrentWeather";
import Forecast from "./Forecast";

export function ContentLeft() {
    return (
        <div className="">

            {/* current weather, data-current-weather */}
            <CurrentWeather />

            {/* forecast */}
            <Forecast />

        </div>
    )
}