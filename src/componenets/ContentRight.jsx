import Footer from "./Footer";
import Highlight from "./Highlight";
import HourlyForecast from "./HourlyForecast";

export default function ContentRight() {
    return (
        <div>
            <Highlight />

            <HourlyForecast />

            <Footer />
        </div>
    )
}