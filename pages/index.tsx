import type { NextPage } from "next";
import ApisList from "../components/home/apis-section";
import SectionInfo from "../components/section-info";
import UserInfo from "../components/home/user-section";
import Section from "../components/section";
import { formationInfo, sectionApisInfo, sectionFormationInfo } from "../data/apis";
import { divStyle } from "../styles/styles";
import Formation from "../components/home/formation-section";
import AboutSkills from "../components/home/about-section";

const Home: NextPage = () => {

    return (
        <div style={divStyle}>
            <UserInfo />
            <Section
                info={
                    <SectionInfo
                        titleSection={sectionApisInfo.title}
                        textSection={sectionApisInfo.text}
                        color={{ color: "#ffffff" }}
                    />
                }
                content={
                    <ApisList />
                }
                backgroundColor={
                    { backgroundColor: "transparent" }
                }
            />
            <Section
                info={
                    <SectionInfo
                        titleSection={sectionFormationInfo.title}
                        textSection={sectionFormationInfo.text}
                        color={{ color: "#1d1d1d" }}
                    />
                }
                content={
                    <AboutSkills />
                }
                backgroundColor={
                    { backgroundColor: "#ffffff" }
                }
            />
            <Section
                info={
                    <SectionInfo
                        titleSection={formationInfo.title}
                        textSection={formationInfo.text}
                        color={{ color: "#ffffff" }}
                    />
                }
                content={
                    <Formation />
                }
                backgroundColor={
                    { backgroundColor: "#061833" }
                }
            />
        </div>
    );
};

export default Home;
