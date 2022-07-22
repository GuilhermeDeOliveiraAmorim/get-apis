import useGetWeather from "../../hooks/useGetWeather";
import useGeolocation from 'react-hook-geolocation';

export default function Weather() {

    const geolocation = useGeolocation();

    const weather = useGetWeather(geolocation.altitude, geolocation.longitude);

    return (
        <div>
            weather
        </div>
    )
}