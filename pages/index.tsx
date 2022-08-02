import type { NextPage } from "next";
import ApisSection from "../components/home/apis-section";
import ApisList from "../components/home/apis-section/apis-list";
import FormationSection from "../components/home/formation-section";
import SectionInfo from "../components/home/section-info";
import UserInfo from "../components/home/user";
import Section from "../components/section";
import { sectionApisInfo } from "../data/apis";

const Home: NextPage = () => {

    const divStyle = {
        height: "100vh",
        backgroundImage: `url(/luz-topo-grande.1647533643.png)`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    };

    return (
        <div style={divStyle}>
            <UserInfo />
            <Section info={<SectionInfo titleSection={sectionApisInfo.title} textSection={sectionApisInfo.text} />} content={<ApisList />} backgroundColor={{backgroundColor: "transparent"}} />
            <ApisSection />
            <FormationSection />
        </div>
    );
};

export default Home;
