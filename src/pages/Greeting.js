
// import Header from "../../components/Header/Header";
// import Footer from "../../components/Footer/Footer";
// import "./Greeting.css";

// const Greeting = () => {

//     return (
//         <>
//             <Header />
//             <div className="content-wrap">
//                 <div className="title-box">
//                     <div className="sub-title">
//                         <h3>인사말</h3>
//                     </div>
//                 </div>
//                 <div className="sub-content">
//                     <div className="content-box">
//                         <div className="con-box no-pd">
//                             <div className="intro-box01">
//                                 <div className="img-box"><img src={require('../../assets/images/content/img-intro01.jpg')} alt="원격교육지원센터" /></div>
//                                 <div className="content">
//                                     <h6 className="h6-tit02">(주)Andwise Jiniworks</h6>
//                                     <p className="con-p">설계단계부터 Lazy binding이란 개념으로 CMS의 장점인 구조와 표현의 분리를 용이하게 하여 표준화와 웹 품질 향상된 사이트 프레임웍을 제공합니다.. 또한 구조와 표현이 분리되면 코드의 양은 줄어들고 사이트의 로딩속도도 빨라지며, 코딩과 유지보수의 효율이 크게 늘어난다. 또한 표준화된 콘텐츠의 자유로운 배치가 가능하여 아이폰 O/S나 안드로이드 O/S같은 서로 다른 모바일 환경에 최적화하여 콘텐츠 출판이 가능합니다.</p>
//                                     <p className="con-p">표준화된 에디터를 이용한 일관된 사이트 생산도구 제공 기존의 서로 다른 개발 혹은 기획자 ,디자이너가 사용한 비표준 문법 혹은 코드들은 계속적으로 확대 재생산되어 결국 접근성에 심각한 위해를 가져올 수 있다. 본 CMS에 내장된 각각의 에디터들은 XHTML 1.0표준에 맞추어 개발되어 매우 높은 접근성을 제공한다. 또한 어떤 작업자가 작업을 해도 표준에디터를 통하기 때문에 사이트내의 모든 코드들을 동일한 룰을 적용함으로서 지속적인 표준을 준수하게 만든다. 개발자 중심이 아닌 사용자 중심의 높은 호환성을 유지해주고 표준안을 엄격히 준수하는 사이트가 되고 이것이 궁극적으로 비용의 감소와 함께 보다 접근성이 강조된 효율적인 웹 서비스를 지향하게 합니다.</p>
//                                     <p className="con-p">변경되는 웹 접근성 지침에 빠른 대응이 가능 한국형 웹 콘텐츠 접근성 지침 2.1이 개정 예정이고 개정 후에는 검서 항목이 현 22개에서 24개로 확대 되는 등 트랜드의 변화에 따라 지속적인 지침의 변경이 있습니다. CMS 는 지침의 변경에도 지속적인 업데이트를 통해 빠르게 대응이 가능하고 기존에 수립된 콘텐츠도 빠르게 개선 및 변경이 가능합니다.</p>
//                                     <p className="con-p no-pd">웹 표준을 준수한 다양한 UI 컴퍼넌트 및 구조를 제공 자체 제공하는 모든 모듈은 웹표준을 준수하며 웹표준 빌더를 통해 수립된 콘텐츠는 크로스 브라우징을 완벽히 지원합니다. 또한 모든 지속되는 콘텐츠는 빌더를 통해 관리됨으로 지속적으로 사이트를 표준 웹으로 운영 유지 관리가 가능합니다</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <Footer />
//         </>
//     );
// };

// export default Greeting;

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import SubVisual from "../../components/SubVisual/SubVisual";
import TitlePage from "../../components/TitlePage/TitlePage";
import SubMenu from "../../components/SubMenu/SubMenu";
import PathNavigator from "../../components/PathNavigator/PathNavigator";
import menuData from "../../components/Header/MenuData";

import "../../css/Guide.css";
import "../../css/table.css";
import "./Guide.Content.css";

const Guide = () => {

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
                            <div className="con-box">
                                <h3 className="title">템플릿 안내<span>template Information</span></h3>
                                <p className="con-p no-pbt">템플릿의 메인페이지는 게시판과 아래에 메뉴 링크와 배너로 구성되어 있습니다.<br />서브페이지에는 서브비주얼 이미지가 각 메뉴별로 배치되어 있고, 메뉴는 1-2-3뎁스까지 지원합니다.(1뎁스:소개, 2뎁스:인사말)</p>
                            </div>
                            <div className="con-box">
                                <h4 className="h4-tit02">Tab</h4>
                                <h5 className="h5-tit02">기본 페이지 이동 탭(1단)</h5>
                                <p className="con-p">탭의 갯수가 5개 이하일 경우 너비는 1/n 적용</p>
                                {/* <div className="tab-box">
                                    <ul className="tab-ul01">
                                        <li className="active first"><a className="active" href="#a"><span>tab_01</span></a></li>
                                        <li><a href="#a"><span>tab_02</span></a></li>
                                        <li className=" last"><a href="#a"><span>tab_03</span></a></li>
                                        <li className=" last"><a href="#a"><span>tab_04</span></a></li>
                                    </ul>
                                </div>
                                <div className="m-tab-box">
                                    <label for="tab_select">tab_01</label>
                                    <select className="tab-sel" id="tab_select">
                                        <option selected="selected" value="#a">tab_01</option>
                                        <option value="#a">tab_02</option>
                                        <option value="#a">tab_03</option>
                                        <option value="#a">tab_04</option>
                                    </select>
                                </div> */}
                            </div>
                            <div className="con-box">
                                <h4 className="h4-tit01">본문 컨텐츠 타이틀(h4)</h4>
                                <h5 className="h5-tit01">본문 컨텐츠 타이틀(h5)</h5>
                                <h6 className="h6-tit01">본문 컨텐츠 타이틀(h6)</h6>
                                <p className="con-p">본문 컨텐츠의 기본 텍스트입니다.</p>
                                <p className="con-p">우리 전주대학교는 '기독교 정신의 구현'을 건학 이념으로 1964년에 설립되어, 진리·평화·자유의 교시와 영성·인성·지성의 전인교육을 바탕으로 학문과 교육의 실용화를 통해 사회적 가치를 창출하는 창의적 실용인재를 양성하여왔습니다. '교육가치 창출 1위, 기독교 명문사학'이라는 대학 비전을 정립하고, 교육과정 및 학사제도를 혁신하고 있으며, 그동안 쌓아 온 탁월한 교육적 성과를 바탕으로 "학생성공과 지역혁신성장을 선도하는 대학"으로서의 위치를 더욱 견고히 해나가고 있습니다.<br />대학은 학생의 미래를 보장해주는 교육을 제공해야 한다는 기본철학 아래 학생이 성공할 수 있는 최고의 교육환경을 제공하고자 재정 건정성 확보 및 교육 여건을 지속적으로 개선해 나가고 있습니다. 또한, 대학은 사회적 책무 이행과 지역혁신성장을 위한 동반자로서 ESG경영 실천으로 지역사회와 함께 동반성장을 이끌겠습니다. 최근 대학을 둘러싼 대내·외 환경이 갈수록 어려워지고 있는 가운데 4차 산업혁명에 따른 기술 중심의 시대 변화, 코로나19 여파로 인한 비대면 교육의 확산 등 고등교육의 패러다임이 급변하는 현실을 마주하고 있습니다</p>
                                <p className="mark-p txt-red">대외협력홍보실은 대학의 홍보를 위한 제반업무, 대외협력에 관한 사항, 대학발전기금 모금 등 대학의 대외적 업무를 총괄하는 부서입니다.</p>
                            </div>
                            <div className="con-box">
                                <h4 className="h4-tit01">리스트 불릿</h4>
                                <ul className="ul-type-bar">
                                    <li>리스트 타입01-01</li>
                                    <li>리스트 타입02-02</li>
                                </ul>
                                <ul className="ul-type-dot">
                                    <li>리스트 타입02-01</li>
                                    <li>리스트 타입02-02</li>
                                </ul>
                            </div>
                            <div className="con-box">
                                <h4 className="h4-tit01">본문 컨텐츠 내 박스</h4>
                                <h5 className="h5-tit02">테두리가 있는 박스</h5>
                                <p className="con-p">본문 컨텐츠 내에서 테두리로 분리되는 박스가 필요할 시 사용합니다.</p>
                                <div className="border-box">
                                    <p className="con-p no-pbt">전주대학교의 모든 구성원은 학생들에게 인생의 동반자이자 삶의 멘토가 되어 성공의 길에 우리 학생들과 함께 걸어가고 있습니다. 특히, 학생 여러분들의 저마다 타고난 소질을 발견하고 계발하여 각자의 적성에 맞는 일을 할 수 있도록 최선의 노력을 하고 있으며, 개개인의 적성과 목표에 부합하는 최고의 교육시스템을 만들어 가고 있습니다. 기독교 정신에 입각한 창의적 실용인재를 육성하고, 실용적 연구역량을 증진하며, 교육가치창출 1위 대학, 미래를 대비하고 변화를 선도하는 '전주대학교'가 될 수 있도록 최선의 노력을 기울이겠습니다.</p>
                                </div>
                            </div>
                            <div className="con-box">
                                <h4 className="h4-tit01">본문 컨텐츠 내 박스</h4>
                                <h5 className="h5-tit02">테두리가 있는 박스</h5>
                                <p className="con-p">본문 컨텐츠 내에서 테두리로 분리되는 박스가 필요할 시 사용합니다.</p>
                                <div className="bg-box">
                                    <p className="con-p no-pbt">전주대학교의 모든 구성원은 학생들에게 인생의 동반자이자 삶의 멘토가 되어 성공의 길에 우리 학생들과 함께 걸어가고 있습니다. 특히, 학생 여러분들의 저마다 타고난 소질을 발견하고 계발하여 각자의 적성에 맞는 일을 할 수 있도록 최선의 노력을 하고 있으며, 개개인의 적성과 목표에 부합하는 최고의 교육시스템을 만들어 가고 있습니다. 기독교 정신에 입각한 창의적 실용인재를 육성하고, 실용적 연구역량을 증진하며, 교육가치창출 1위 대학, 미래를 대비하고 변화를 선도하는 '전주대학교'가 될 수 있도록 최선의 노력을 기울이겠습니다.</p>
                                </div>
                            </div>
                            <div className="con-box">
                                <h4 className="h4-tit01">Table</h4>
                                <h5 className="h5-tit02">테이블 기본형</h5>
                                <p className="con-p">반응형 시 각 컬럼이 갖고있는 비율대로 너비가 줄어듭니다. (column 수가 적을 시)</p>
                                <div className="table-wrap scrollbox">
                                    <table className="table">
                                        <caption>
                                            <strong>수업료 감면</strong>
                                            <span>등급, 평점, 수업료로 구분된 수업료 감면을 안내하는 표</span>
                                        </caption>
                                        <colgroup>
                                            <col style={{ width: "33.33%" }} />
                                            <col style={{ width: "33.33%" }} />
                                            <col style={{ width: "auto" }} />
                                        </colgroup>
                                        <thead>
                                            <tr>
                                                <th scope="col">등급</th>
                                                <th scope="col">평점</th>
                                                <th scope="col">수업료</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>A급</td>
                                                <td>3.5이상</td>
                                                <td>50% 감면</td>
                                            </tr>
                                            <tr>
                                                <td>B급</td>
                                                <td>3.0~3.5 미만</td>
                                                <td>40% 감면</td>
                                            </tr>
                                        </tbody>
                                    </table>

                                    {/* <div className="msg-touch-help">
                                        <img src="/_res/temp/full-type11/img/common/ico-table-scroll.png" alt="테이블 스크롤 아이콘" />
                                    </div> */}

                                </div>
                                {/* <div className="con-box no-pbt">
                                    <h4 className="h4-tit01">버튼</h4>
                                    <div className="con-box02">
                                        <h5 className="h5-tit02">가운데 정렬 기본 상자버튼</h5>
                                        <div className="box-btn">
                                            <div className="container-box">
                                                <a className="btn" href="#" target="_blank" title="Sample">Sample 01</a>
                                                <a className="btn btn-gray" href="#" target="_blank" title="Sample">Sample 02</a>
                                                <a className="btn btn-sky" href="#" target="_blank" title="Sample">Sample 03</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="con-box02 no-pd">
                                        <h5 className="h5-tit02">기본 링크버튼</h5>
                                        <div className="box-btn no-pbt">
                                            <div className="container-box no-pbt">
                                                <a className="btn btn-file" download="" href="#" title="Sample">다운로드</a>
                                                <a className="btn btn-link" download="" href="#" title="Sample">바로가기</a>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default Guide;
