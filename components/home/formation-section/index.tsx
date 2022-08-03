import { formationContent } from "../../../data/apis";
import FormationStyle from "./Formation.module.css";

export default function Formation() {

    return (
        <div className={FormationStyle.formations}>
            {formationContent.map(formation =>
                <div key={formation.id} className={FormationStyle.formation}>
                    <div className={FormationStyle.img_div}>
                        <img className={FormationStyle.img} src={formation.institutionIcon} />
                    </div>
                    <h1 className={FormationStyle.h1}>
                        {formation.institutionName}
                    </h1>
                    <h2 className={FormationStyle.h2}>
                        {formation.formation}
                    </h2>
                    <h3 className={FormationStyle.h3}>
                        {formation.institutionPlace}
                    </h3>
                    <div className={FormationStyle.date}>
                        <h4 className={FormationStyle.h4}>
                            <span>
                                {formation.monthStartDate}
                            </span>
                            -
                            <span>
                                {formation.startDate}
                            </span>
                        </h4>
                        <h4 className={FormationStyle.h4}>
                            <span>
                                {formation.monthEndDate}
                            </span>
                            -
                            <span>
                                {formation.endDate}
                            </span>
                        </h4>
                    </div>
                </div>
            )}
        </div>
    );
}
