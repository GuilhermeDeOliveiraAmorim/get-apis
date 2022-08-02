import { IApisInfo } from "../../../../interfaces/apis_info";
import ApisInfoStyle from "./ApisInfo.module.css";

export default function ApisInfo(props: IApisInfo) {

    const { titleSection, textSection } = props;

    return (
        <div className={ApisInfoStyle.info}>
            <h1 className={ApisInfoStyle.h1}>{titleSection}</h1>
            <p className={ApisInfoStyle.p}>
                {textSection}
            </p>
        </div>
    );
}
