import { useQuery } from "@tanstack/react-query";
import api from "../services/backend";

const key = "cbd6763a67cbc5817ff34d1feaabe048";

const getWeather = async (lat: number | null, lon: number | null) => {
    const response = await api.get(
        `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=hourly,daily&appid={${key}}`
    );
    return response.data;
};

export default function useGetWeather(lat: number | null, lon: number | null) {
    return useQuery(["weather"], () => getWeather(lat, lon));
}
