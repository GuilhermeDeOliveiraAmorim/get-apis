import { useQuery } from "@tanstack/react-query";
import { IGitUser } from "../../interfaces/git_user";
import api from "../../services/backend";

const getGitUserInfo = async () => {

    const user = "GuilhermeDeOliveiraAmorim";

    const response = await api.get<IGitUser>(`https://api.github.com/users/${user}`);

    return response.data;
};

export default function useGetGitUserInfo() {
    return useQuery(["git_user"], () => getGitUserInfo());
}
