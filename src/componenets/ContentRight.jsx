import Footer from "./Footer";
import Highlight from "./Highlight";
import HourlyForecast from "./HourlyForecast";

export default function ContentRight() {
    return (
        <div className="">
            <Highlight />

            <HourlyForecast />

            <Footer />
        </div>
    )
}