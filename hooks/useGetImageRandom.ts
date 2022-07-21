import { useQuery } from "@tanstack/react-query";
import api from "../services/backend";

const getImageRandom = async () => {
    const response = await api.get("https://picsum.photos/v2/list");

    const imageList = response.data;

    const image =
        imageList[Math.floor(Math.random() * imageList.length)]["download_url"];

    return image;
};

export default function useGetImageRandom() {
    return useQuery(["image"], () => getImageRandom());
}
