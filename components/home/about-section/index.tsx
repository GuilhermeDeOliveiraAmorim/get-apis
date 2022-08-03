import { sectionFormationSkills } from "../../../data/apis";
import AboutSkillsStyle from "./AboutSkills.module.css";
import { colors } from "../../../util/util_colors";

export default function AboutSkills() {

    const useColors = colors;

    return (
        <div className={AboutSkillsStyle.skills}>
            {sectionFormationSkills.map((skill) => (
                <div
                    key={skill.id}
                    className={AboutSkillsStyle.skill}
                    style={{ backgroundColor: useColors[Math.floor(Math.random() * 4) + 1] }}
                >
                    {skill.skill}<span className={AboutSkillsStyle.level}>{skill.level}</span>
                </div>
            ))}
        </div>
    );
}
