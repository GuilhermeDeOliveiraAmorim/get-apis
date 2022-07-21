import { useQuery } from "@tanstack/react-query";
import api from "../services/backend";

const getAdviceRandom = async () => {
    const response = await api.get("https://api.adviceslip.com/advice");
    return response.data["slip"]["advice"];
};

export default function useGetAdviceRandom() {
    return useQuery(["advice"], () => getAdviceRandom());
}
