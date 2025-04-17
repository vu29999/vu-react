import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo01 from '../../assets/images/common/logo-v.png';
import logo02 from '../../assets/images/common/logo-b.png';
import PopSiteMap from "./popSiteMap";
import MenuMobile from "./MenuMobile";
import menuData from "./MenuData";

const Header = () => {
    <menuData />

    const [hoverIndex, setHoverIndex] = useState(null);
    const bgRef = useRef(null);
    const subBoxRefs = useRef([]);

    // Tìm chiều cao lớn nhất
    const getMaxSubBoxHeight = () => {
        return subBoxRefs.current.reduce((max, el) => {
            if (el) {
                return Math.max(max, el.offsetHeight);
            }
            return max;
        }, 0);
    };

    useEffect(() => {
        if (hoverIndex !== null) {
            const maxHeight = getMaxSubBoxHeight();
            if (bgRef.current) {
                bgRef.current.style.height = `${maxHeight}px`;
            }
        } else {
            if (bgRef.current) {
                bgRef.current.style.height = `0px`;
            }
        }
    }, [hoverIndex]);

    const [isMobileOpen, setIsMobileOpen] = useState(false);

    return (
        <header>


            <div
                className={`header-wrap ${hoverIndex !== null ? "on" : ""}`}
                onMouseLeave={() => setHoverIndex(null)}
            >
                <div className="top-header-wrap">
                    <div className="top-header-box" >
                        <ul className="top-util-box">
                            <li><Link to="#a" title="home">Home</Link></li>
                            <li><Link to="#a" title="로그인">로그인</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="bottom-header-wrap">
                    <div className="bottom-header-box">
                        <div className="bottom-header-content">
                            <h1>
                                <Link to="/" title="원격교육지원센터">
                                    <img src={logo01} alt="원격교육지원센터" className="logo-w" />
                                    <img src={logo02} alt="원격교육지원센터" className="logo-b" />
                                </Link>
                            </h1>
                            <div className="gnb">
                                <ul className="depth_01">
                                    {menuData.map((menuItem, index) => (
                                        <li
                                            key={index}
                                            className={hoverIndex === index ? "on-menu" : ""}
                                            onMouseEnter={() => setHoverIndex(index)}
                                        >
                                            <Link to={menuItem.path} title={menuItem.title}>{menuItem.title}</Link>
                                            <div
                                                className="sub-mn-box"
                                                ref={(el) => (subBoxRefs.current[index] = el)}
                                            >
                                                {/* <p>{menuItem.title}</p> */}
                                                {Array.isArray(menuItem.sub) && (
                                                    <ul className="depth_02">
                                                        {menuItem.sub.map((sub, subIndex) => (
                                                            <li key={subIndex}>
                                                                <Link to={sub.path} title={sub.title}>{sub.title}</Link>
                                                                {Array.isArray(sub.subSub) && sub.subSub.length > 0 && (
                                                                    <ul className="depth_03">
                                                                        {sub.subSub.map((item, idx) => (
                                                                            <li key={idx}>
                                                                                <Link to={item.path} title={item.title}>{item.title}</Link>
                                                                            </li>
                                                                        ))}
                                                                    </ul>
                                                                )}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <PopSiteMap menuData={menuData} />

                            <MenuMobile
                                menuData={menuData}
                                isOpen={isMobileOpen}
                                setIsOpen={setIsMobileOpen}
                            />

                            <div className="gnb-bg-menu" ref={bgRef}></div>

                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;




