
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import SubVisual from "../../components/SubVisual/SubVisual";
import TitlePage from "../../components/TitlePage/TitlePage";
import PathNavigator from "../../components/PathNavigator/PathNavigator";
import menuData from "../../components/Header/MenuData";

import "../../css/Guide.css";
import "./Team.css";

const Team = () => {

    return (
        <>
            <Header />
            <div className="sub-container">
                <SubVisual menuData={menuData} />
                <PathNavigator menuData={menuData} />
                {/* <SubMenu menuData={menuData} /> */}
                <div className="content-wrap">
                    <TitlePage menuData={menuData} />
                    <div className="sub-content">
                        <div className="content-box">
                            <div className="con-box no-pd">
                                <h4 class="h4-tit01">Team Page</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Team;
