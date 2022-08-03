import { sectionFormationSkills } from "../../../data/apis";
import FormationListStyle from "./FormationList.module.css";
import { colors } from "../../../util/util_colors";

export default function FormationList() {

    const useColors = colors;

    return (
        <div className={FormationListStyle.skills}>
            {sectionFormationSkills.map((skill) => (
                <div
                    key={skill.id}
                    className={FormationListStyle.skill}
                    style={{ backgroundColor: useColors[Math.floor(Math.random() * 4) + 1] }}
                >
                    {skill.skill}<span className={FormationListStyle.level}>{skill.level}</span>
                </div>
            ))}
        </div>
    );
}
