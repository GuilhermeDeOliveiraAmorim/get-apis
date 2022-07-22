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
        <div className={cardStyle.card}>
            <img className={cardStyle.img_full} src={poster} alt="Avatar" />
            <div className={cardStyle.container}>
                <h4 className={cardStyle.h4}><b>{title}</b></h4>
                <p className={cardStyle.p}>{synopsis}</p>
            </div>
        </div>
    );
}