import React from "react";
import "./MainContent02.css";
import { Link } from 'react-router-dom';


const MainContent02 = () => {

    return (
        <>
            <div className="main-content-wrap02">
                <div className="main-content-box02">
                    <div className="wrap-image">
                        <ul>
                            <li>
                                <Link to="#" title="스튜디오 예약">
                                    <div className="images">
                                        <img src={require('../../assets/images/main/img-category-01.png')} alt="images" />
                                    </div>
                                    <div className="content">
                                        <div className="inner">
                                            <div className="icon"><img src={require('../../assets/images/common/ico-lecture.png')} alt="icon lecture" /></div>
                                            <ul>
                                                <li>교과목안내</li>
                                                <li>강의시간표 및 강의계획안의 정보</li>
                                            </ul>
                                        </div>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link to="#" title="강의실 예약">
                                    <div className="images">
                                        <img src={require('../../assets/images/main/img-category-02.png')} alt="images" />
                                    </div>
                                    <div className="content">
                                        <div className="inner">
                                            <div className="icon"><img src={require('../../assets/images/common/studio.png')} alt="icon studio" /></div>
                                            <ul>
                                                <li>강의시간표</li>
                                                <li>강의시간표 및 강의계획안의 정보</li>
                                            </ul>
                                        </div>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link to="#" title="기자재(장비) 대여 예약">
                                    <div className="images">
                                        <img src={require('../../assets/images/main/img-category-03.png')} alt="images" />
                                    </div>
                                    <div className="content">
                                        <div className="inner">
                                            <div className="icon"><img src={require('../../assets/images/common/equipment.png')} alt="icon equipment" /></div>
                                            <ul>
                                                <li>취업정보</li>
                                                <li>알찬 취업정보를 알려드립니다.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>

    );
};

export default MainContent02;


