import ApisList from ".././apis-section/apis-list";
import SectionStyle from "./Section.module.css";
import { sectionApisInfo } from "../../../data/apis";
import SectionInfo from "../section-info";

export default function ApisSection() {

    return (
        <div className={SectionStyle.section}>
            <div className={SectionStyle.container}>
                <SectionInfo titleSection={sectionApisInfo.title} textSection={sectionApisInfo.text} />
                <ApisList />
            </div>
        </div>
    );
}
