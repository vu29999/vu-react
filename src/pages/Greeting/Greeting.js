
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import SubVisual from "../../components/SubVisual/SubVisual";
import TitlePage from "../../components/TitlePage/TitlePage";
import PathNavigator from "../../components/PathNavigator/PathNavigator";
import menuData from "../../components/Header/MenuData";

import "../../css/Guide.css";
import "./Greeting.css";

const Greeting = () => {

    return (
        <>
            <Header />
            <div className="sub-container">
                <SubVisual menuData={menuData} />
                <PathNavigator menuData={menuData} />
                <div className="content-wrap">
                    <TitlePage menuData={menuData} />
                    <div className="sub-content">
                        <div className="content-box">
                            <div className="con-box no-pd">
                                <div className="intro-box01">
                                    <div className="img-box"><img src={require('../../assets/images/content/img-intro01.jpg')} alt="원격교육지원센터" /></div>
                                    <div className="content">
                                        <h6 className="h6-tit02">(주)Andwise Jiniworks</h6>
                                        <p className="con-p">설계단계부터 Lazy binding이란 개념으로 CMS의 장점인 구조와 표현의 분리를 용이하게 하여 표준화와 웹 품질 향상된 사이트 프레임웍을 제공합니다.. 또한 구조와 표현이 분리되면 코드의 양은 줄어들고 사이트의 로딩속도도 빨라지며, 코딩과 유지보수의 효율이 크게 늘어난다. 또한 표준화된 콘텐츠의 자유로운 배치가 가능하여 아이폰 O/S나 안드로이드 O/S같은 서로 다른 모바일 환경에 최적화하여 콘텐츠 출판이 가능합니다.</p>
                                        <p className="con-p">표준화된 에디터를 이용한 일관된 사이트 생산도구 제공 기존의 서로 다른 개발 혹은 기획자 ,디자이너가 사용한 비표준 문법 혹은 코드들은 계속적으로 확대 재생산되어 결국 접근성에 심각한 위해를 가져올 수 있다. 본 CMS에 내장된 각각의 에디터들은 XHTML 1.0표준에 맞추어 개발되어 매우 높은 접근성을 제공한다. 또한 어떤 작업자가 작업을 해도 표준에디터를 통하기 때문에 사이트내의 모든 코드들을 동일한 룰을 적용함으로서 지속적인 표준을 준수하게 만든다. 개발자 중심이 아닌 사용자 중심의 높은 호환성을 유지해주고 표준안을 엄격히 준수하는 사이트가 되고 이것이 궁극적으로 비용의 감소와 함께 보다 접근성이 강조된 효율적인 웹 서비스를 지향하게 합니다.</p>
                                        <p className="con-p">변경되는 웹 접근성 지침에 빠른 대응이 가능 한국형 웹 콘텐츠 접근성 지침 2.1이 개정 예정이고 개정 후에는 검서 항목이 현 22개에서 24개로 확대 되는 등 트랜드의 변화에 따라 지속적인 지침의 변경이 있습니다. CMS 는 지침의 변경에도 지속적인 업데이트를 통해 빠르게 대응이 가능하고 기존에 수립된 콘텐츠도 빠르게 개선 및 변경이 가능합니다.</p>
                                        <p className="con-p no-pd">웹 표준을 준수한 다양한 UI 컴퍼넌트 및 구조를 제공 자체 제공하는 모든 모듈은 웹표준을 준수하며 웹표준 빌더를 통해 수립된 콘텐츠는 크로스 브라우징을 완벽히 지원합니다. 또한 모든 지속되는 콘텐츠는 빌더를 통해 관리됨으로 지속적으로 사이트를 표준 웹으로 운영 유지 관리가 가능합니다</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Greeting;
