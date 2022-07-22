import Card from "../../components/home/ghibli/card";
import useGetStudioGhibliFilms from "../../hooks/useGetStudioGhibliFilms";
import ghibliStyle from "./Ghibli.module.css";

export default function Ghibli() {
  const ghibliFilms = useGetStudioGhibliFilms();

  return (
    <div>
      <ul className={ghibliStyle.screen}>
        {ghibliFilms.data?.map((film) => (
          <li className={ghibliStyle.card} key={film.id}>
            <Card {...film} />
          </li>
        ))}
      </ul>
    </div>
  );
}
