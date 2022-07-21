import cardStyle from "./Card.module.css"

interface IProps {
    id: number;
    title: string;
    poster: string;
    synopsis: string;
    year: number;
}

export default function Card(props: IProps) {

    const { id, title, poster, synopsis, year } = props;

    return (
        <div>
            <h1 className={cardStyle.title}>
                {title}
            </h1>
            <p className={cardStyle.snopysis}>
                {synopsis}
            </p>
            <p className={cardStyle.year}>
                {year}
            </p>
        </div>
    );
}