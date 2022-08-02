import { CSSProperties } from "react";
import SectionInfoStyle from "./SectionInfo.module.css";

interface ISectionInfo {
    title: string;
    text: string;
    textColor: CSSProperties;
}

export default function SectionInfo(props: ISectionInfo) {

    const { title, text, textColor } = props;

    return (
        <div className={SectionInfoStyle.info}>
            <h1 className={SectionInfoStyle.h1} style={textColor} >{title}</h1>
            <p className={SectionInfoStyle.p} style={textColor}>
                {text}
            </p>
        </div>
    );
}
