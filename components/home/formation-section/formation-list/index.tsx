import Link from "next/link";
import { implementedAPIs } from "../../../../data/apis";
import { changeColor } from "../../../../util/util_change_color";
import { colors } from "../../../../util/util_colors";
import FormationListStyle from "./FormationList.module.css";

export default function FormationList() {
    return (
        <div className={FormationListStyle.apis}>
            {implementedAPIs.map((api) => (
                <Link key={api.id} passHref href={`${api.url}`}>
                    <div className={FormationListStyle.card_api}>
                        <h1
                            className={FormationListStyle.card_api_h}
                            style={changeColor(colors)}
                        >
                            {api.name}
                        </h1>
                        <p className={FormationListStyle.card_api_p}>
                            {api.description}
                        </p>
                    </div>
                </Link>
            ))}
        </div>
    );
}
