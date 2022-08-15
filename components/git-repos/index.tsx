import axios from "axios";
import useGetGitUserRepos from "../../hooks/use-github/useGetGitUserRepos";

export default function Repos() {
    
    const repos = useGetGitUserRepos();

    // const arrUrlLanguages = Array();
    
    // function getLanguages(params: string) {
    //     getRepo(params);
    // }

    // async function getRepo(params: string) {
    //     try {
    //       const response = await axios.get(params);
    //       console.log(response);
    //     } catch (error) {
    //       console.error(error);
    //     }
    //   }
    
    // repos.data?.map(r => getLanguages(r.languages_url));

    // console.log(arrUrlLanguages);
    
    return (
        <div>

        </div>
    );
}