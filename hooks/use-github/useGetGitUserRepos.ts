import { useQuery } from "@tanstack/react-query";
import { IGitUser } from "../../interfaces/git_user";
import api from "../../services/backend";

interface IRepo {
  created_at: string;
  language: string;
  languages_url: string;
  name: string;
}

const getGitUserRepos = async () => {
  const user = "GuilhermeDeOliveiraAmorim";

  const response = await api.get<IRepo[]>(
    `https://api.github.com/users/${user}/repos`
  );

  console.log(response.data);

  return response.data;
};

export default function useGetGitUserRepos() {
  return useQuery(["git_user_repos"], () => getGitUserRepos());
}
