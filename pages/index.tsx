import type { NextPage } from "next";
import ApisSection from "../components/home/home";
import UserInfo from "../components/home/user";

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
            <ApisSection />
        </div>
    );
};

export default Home;
