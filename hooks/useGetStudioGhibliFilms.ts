import { useQuery } from "@tanstack/react-query";
import api from "../services/backend";

const getStudioGhibliFilms = async () => {
  const response = await api.get("https://ghibliapi.herokuapp.com/films");
  var arrFilms = Array();
  response.data.map((a) => {
    arrFilms.push({
      id: a.id,
      title: a.title,
      poster: a.movie_banner,
      synopsis: a.description,
	  year: a.release_date
    });
  });
  return arrFilms;
};

export default function useGetStudioGhibliFilms() {
  return useQuery(["ghibliFilms"], () => getStudioGhibliFilms());
}
