import { sectionFormationSkills } from "../../../data/apis";
import AboutStyle from "./About.module.css";
import { colors } from "../../../util/util_colors";

export default function About() {

    const useColors = colors;

    return (
        <div className={AboutStyle.skills}>
            {sectionFormationSkills.map((skill) => (
                <div
                    key={skill.id}
                    className={AboutStyle.skill}
                    style={{ backgroundColor: useColors[Math.floor(Math.random() * 4) + 1] }}
                >
                    {skill.skill}<span className={AboutStyle.level}>{skill.level}</span>
                </div>
            ))}
        </div>
    );
}
