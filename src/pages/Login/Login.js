import { useState, useRef } from "react";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import SubVisual from "../../components/SubVisual/SubVisual";
import TitlePage from "../../components/TitlePage/TitlePage";
import PathNavigator from "../../components/PathNavigator/PathNavigator";
import menuData from "../../components/Header/MenuData";

import "../../css/Guide.css";
import "./Login.css";

const Login = () => {
    const [activeTab, setActiveTab] = useState("a");

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(prev => !prev);
    };

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
                                <div className="login-inner">
                                    <div className="login-body-box">
                                        <div className="tabs">
                                            <button
                                                className={`tab-a ${activeTab === "a" ? "active" : ""}`}
                                                onClick={() => setActiveTab("a")}
                                            >
                                                로그인
                                            </button>

                                            <div
                                                tabIndex={0}
                                                className="tab-con"
                                                style={{ display: activeTab === "a" ? "block" : "none" }}
                                            >
                                                <div className="login-head">
                                                    <h2>로그인</h2>
                                                    <p>로그인을 하시면 다양한 서비스를 받으실 수 있습니다.</p>
                                                </div>
                                                <form action="/login" className="login-box" id="loginForm" method="post" name="loginForm">
                                                    <fieldset>
                                                        <legend className="hide">전주대학교 로그인</legend>
                                                        <input type="hidden" name="referer" value="" />
                                                        <input type="hidden" name="site_id" value="" />
                                                        <div className="login-top">
                                                            <div className="inner-form">
                                                                <label htmlFor="member_id">아이디 <span>*</span></label>
                                                                <input type="text" id="member_id" title="아이디" name="member_id" placeholder="ID" data-valid-title="아이디" defaultValue="admin" />
                                                            </div>
                                                            <div className="inner-form">
                                                                <label htmlFor="member_pw">비밀번호 <span>*</span></label>
                                                                <input type={showPassword ? "text" : "password"} id="member_pw" title="비밀번호" name="member_pw" placeholder="PASSWORD" data-valid-title="비밀번호" defaultValue="jj$#@!" />
                                                                {/* <a className="js-eye eye-off" href="#a" title="비밀번호 끄기/켜기"></a> */}
                                                                <button
                                                                    type="button"
                                                                    className={`js-eye ${showPassword ? "eye-on" : "eye-off"}`}
                                                                    onClick={togglePasswordVisibility}
                                                                    aria-label="비밀번호 보기/숨기기"
                                                                >
                                                                </button>
                                                            </div>
                                                            <button className="btn-login" type="submit">로그인</button>
                                                        </div>
                                                        <div className="login-bottom">
                                                            <ul>
                                                                <li className="naver"><a href="#a" target="_blank" title="네이버 로그인"><span>네이버 로그인</span></a></li>
                                                                <li className="kakao"><a href="#a" target="_blank" title="페이스북 로그인"><span>카카오 로그인</span></a></li>
                                                            </ul>
                                                        </div>
                                                    </fieldset>
                                                </form>
                                            </div>

                                            <button
                                                className={`tab-a ${activeTab === "b" ? "active" : ""}`}
                                                onClick={() => setActiveTab("b")}
                                            >
                                                고등학교 로그인
                                            </button>

                                            <div
                                                tabIndex={0}
                                                className="tab-con"
                                                style={{ display: activeTab === "b" ? "block" : "none" }}
                                            >
                                                <div className="login-head">
                                                    <h2>로그인</h2>
                                                    <p>로그인을 하시면 다양한 서비스를 받으실 수 있습니다.</p>
                                                </div>
                                                <form action="/login" className="login-box" id="loginForm" method="post" name="loginForm">
                                                    <fieldset>
                                                        <legend className="hide">전주대학교 로그인</legend>
                                                        <input type="hidden" name="referer" value="" />
                                                        <input type="hidden" name="site_id" value="" />
                                                        <div className="login-top">
                                                            <div className="inner-form">
                                                                <label htmlFor="member_id">아이디 <span>*</span></label>
                                                                <input type="text" id="member_id" title="아이디" name="member_id" placeholder="NEIS ID" data-valid-title="아이디" defaultValue="admin" />
                                                            </div>
                                                            <div className="inner-form">
                                                                <label htmlFor="member_pw">비밀번호 <span>*</span></label>
                                                                <input type={showPassword ? "text" : "password"} id="member_pw" title="비밀번호" name="member_pw" placeholder="PASSWORD" data-valid-title="비밀번호" defaultValue="jj$#@!" />
                                                                {/* <a className="js-eye eye-off" href="#a" title="비밀번호 끄기/켜기"></a></div> */}
                                                                <button
                                                                    type="button"
                                                                    className={`js-eye ${showPassword ? "eye-on" : "eye-off"}`}
                                                                    onClick={togglePasswordVisibility}
                                                                    aria-label="비밀번호 보기/숨기기"
                                                                >
                                                                </button>
                                                            </div>
                                                            <button className="btn-login" type="submit">로그인</button>
                                                        </div>
                                                    </fieldset>
                                                </form>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            <Footer />
        </>
    );
};

export default Login;
