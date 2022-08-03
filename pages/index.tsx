import type { NextPage } from "next";
import ApisList from "../components/home/apis-section/apis-list";
import FormationList from "../components/home/formation-section/";
import SectionInfo from "../components/home/section-info";
import UserInfo from "../components/home/user";
import Section from "../components/section";
import { sectionApisInfo, sectionFormationInfo } from "../data/apis";
import { divStyle } from "../styles/styles";

const Home: NextPage = () => {

    return (
        <div style={divStyle}>
            <UserInfo />
            <Section 
                info = {
                    <SectionInfo
                        titleSection={sectionApisInfo.title}
                        textSection={sectionApisInfo.text}
                        color={{color: "#ffffff"}}
                    />
                }
                content = {
                    <ApisList />
                }
                backgroundColor = {
                    {backgroundColor: "transparent"}
                }
            />
            <Section 
                info = {
                    <SectionInfo
                        titleSection={sectionFormationInfo.title}
                        textSection={sectionFormationInfo.text}
                        color={{color: "#1d1d1d"}}
                    />
                }
                content = {
                    <FormationList />
                }
                backgroundColor = {
                    {backgroundColor: "#ffffff"}
                }
            />
        </div>
    );
};

export default Home;
