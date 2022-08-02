import ApisList from ".././apis-section/apis-list";
import SectionStyle from "./Section.module.css";
import { sectionFormationInfo } from "../../../data/apis";
import SectionInfo from "../section-info";

export default function FormationSection() {
    return (
        <div className={SectionStyle.section}>
            <div className={SectionStyle.container}>
                <ApisList />
            </div>
        </div>
    );
}
