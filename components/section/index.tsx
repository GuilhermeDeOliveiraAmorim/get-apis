import { CSSProperties } from "react";
import SectionStyle from "./Section.module.css";

interface ISection {
    info: JSX.Element;
    content: JSX.Element;
    backgroundColor: CSSProperties;
}

export default function Section(props: ISection) {

    const { info, content, backgroundColor } = props;

    return (
        <div style={backgroundColor} className={SectionStyle.section}>
            <div className={SectionStyle.container}>
                {info}
                {content}
            </div>
        </div>
    );
}
