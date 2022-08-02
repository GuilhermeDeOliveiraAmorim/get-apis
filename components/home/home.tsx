import ApisList from "./apis-section/apis-list";
import ApisInfo from "./apis-section/apis-info";
import HomeStyle from "./Home.module.css";

export default function ApisSection() {

    const title = "Título";
    const text = "Lorem ipsum dolor sit amet. Qui velit optio ex tempora quaerat est autem dolor et magni doloremque.";

    return (
        <div className={HomeStyle.section}>
            <div className={HomeStyle.container}>
                <ApisInfo titleSection={title} textSection={text} />
                <ApisList />
            </div>
        </div>
    );
}
