import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

const MenuMobile = ({ menuData }) => {
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const [openMobileIndex, setOpenMobileIndex] = useState(null); // Cấp 1
    const [openSubIndex, setOpenSubIndex] = useState(null); // Cấp 2
    const location = useLocation();
    const isActive = (path) => location.pathname === path;

    useEffect(() => {
        menuData.forEach((menuItem, index) => {
            if (isActive(menuItem.path)) {
                setOpenMobileIndex(index);
                setOpenSubIndex(null); // Đặt lại SubIndex khi chọn menu cấp 1
            }

            menuItem.sub?.forEach((subItem, subIndex) => {
                if (isActive(subItem.path)) {
                    setOpenMobileIndex(index);
                    setOpenSubIndex(subIndex); // Cập nhật SubIndex khi chọn menu cấp 2
                }

                subItem.subSub?.forEach((subSubItem) => {
                    if (isActive(subSubItem.path)) {
                        setOpenMobileIndex(index);
                        setOpenSubIndex(subIndex);
                    }
                });
            });
        });
    }, [location.pathname, menuData]);

    useEffect(() => {
        if (isMobileOpen) {
            document.body.classList.add("open-menu");
        } else {
            document.body.classList.remove("open-menu");
        }

        return () => {
            document.body.classList.remove("open-menu");
        };
    }, [isMobileOpen]);

    return (
        <>
            {/* Toggle button */}
            <button className="mobi-toggle hamburger01" onClick={() => setIsMobileOpen(!isMobileOpen)}>
                <img src={require('../../assets/images/common/hamburger-ico.png')} alt="메뉴 열기" className="hamb-one" />
            </button>

            {isMobileOpen && (
                <div className="mobile-menu">
                    <div className="m-gnb-top">
                        <ul>
                            <li><Link className="login" to="#a" title="로그인">로그인</Link></li>
                        </ul>
                    </div>

                    {/* Close button */}
                    <button className="mobi-toggle hamburger02" onClick={() => setIsMobileOpen(false)}>
                        <img src={require('../../assets/images/common/hamburger-close.png')} alt="메뉴 닫기" className="hamb-two" />
                    </button>

                    {/* Menu cấp 1 */}
                    <ul className="dep1">
                        {menuData.map((menuItem, index) => {
                            const hasSub = Array.isArray(menuItem.sub) && menuItem.sub.length > 0;
                            const isMenuItemActive =
                                isActive(menuItem.path) ||
                                menuItem.sub?.some((sub) => isActive(sub.path)) ||
                                menuItem.sub?.some((sub) => sub.subSub?.some((subSub) => isActive(subSub.path)));

                            return (
                                <li
                                    key={index}
                                    className={`${hasSub ? "has-sub" : ""} ${isMenuItemActive ? "active" : ""} ${openMobileIndex === index ? "open" : ""}`}
                                >
                                    {hasSub ? (
                                        <a
                                            href="#!"
                                            title={menuItem.title}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setOpenMobileIndex(openMobileIndex === index ? null : index);
                                            }}
                                        >
                                            {menuItem.title}
                                        </a>
                                    ) : (
                                        <Link to={menuItem.path} onClick={() => setIsMobileOpen(false)} title={menuItem.title}>
                                            {menuItem.title}
                                        </Link>
                                    )}

                                    {/* ✅ Luôn render dep2 */}
                                    <ul className={`dep2 ${openMobileIndex === index ? "open" : ""}`}>
                                        {menuItem.sub?.map((subItem, subIndex) => {
                                            const isSubActive =
                                                isActive(subItem.path) ||
                                                subItem.subSub?.some((subSubItem) => isActive(subSubItem.path));

                                            return (
                                                <li
                                                    key={subIndex}
                                                    className={`${isSubActive ? "active" : ""} ${openSubIndex === subIndex ? "open" : ""}`}
                                                >
                                                    <Link to={subItem.path} title={subItem.title}>
                                                        {subItem.title}
                                                    </Link>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </li>
                            );
                        })}
                    </ul>


                    <div className="m-gnb-bottom">
                        <ul>
                            <li><Link to="#a">개인정보 처리방침</Link></li>
                            <li><Link to="#a">이메일무단수집거부</Link></li>
                        </ul>
                    </div>
                </div>
            )}
        </>
    );
};

export default MenuMobile;
