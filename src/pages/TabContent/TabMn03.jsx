
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import SubVisual from "../../components/SubVisual/SubVisual";
import TitlePage from "../../components/TitlePage/TitlePage";
import PathNavigator from "../../components/PathNavigator/PathNavigator";
import TabMenu from "../../components/TabMenu/TabMenu";
import TabMenuMobi from "../../components/TabMenu/TabMenuMobi";
import menuData from "../../components/Header/MenuData";

import "../../css/Guide.css";
import "./TabMn.css";

const TabMn02 = () => {

    return (
        <>
            <Header />
            <div className="sub-container">
                <SubVisual menuData={menuData} />
                <PathNavigator menuData={menuData} />

                <div className="content-wrap">
                    <div className="tab-wrap">
                        <div className="tab-box">
                            <TabMenu menuData={menuData} />
                            <TabMenuMobi menuData={menuData} />
                        </div>
                    </div>
                    <TitlePage menuData={menuData} />
                    <div className="sub-content">
                        <div className="content-box">
                            <div className="con-box no-pd">
                                <h4 className="h4-tit01">tab 03</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default TabMn02;
