import Link from "next/link";
import { implementedAPIs } from "../../../../data/apis";
import { changeColor } from "../../../../util/util_change_color";
import { colors } from "../../../../util/util_colors";
import ApisListStyle from "./ApisList.module.css";

export default function ApisList() {
    return (
        <div className={ApisListStyle.apis}>
            {implementedAPIs.map((api) => (
                <Link key={api.id} passHref href={`${api.url}`}>
                    <div className={ApisListStyle.card_api}>
                        <h1
                            className={ApisListStyle.card_api_h}
                            style={changeColor(colors)}
                        >
                            {api.name}
                        </h1>
                        <p className={ApisListStyle.card_api_p}>
                            {api.description}
                        </p>
                    </div>
                </Link>
            ))}
        </div>
    );
}
