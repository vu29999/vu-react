import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";


const MenuMobile = ({ menuData }) => {

    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const [openMobileIndex, setOpenMobileIndex] = useState(null); // cấp 1
    const [openSubIndex, setOpenSubIndex] = useState(null);

    const location = useLocation();
    const isActive = (path) => location.pathname.startsWith(path);

    useEffect(() => {
        if (isMobileOpen) {
            document.body.classList.add("open-menu");
        } else {
            document.body.classList.remove("open-menu");
        }

        // Optional: cleanup để chắc chắn body không giữ class khi unmount
        return () => {
            document.body.classList.remove("open-menu");
        };
    }, [isMobileOpen]);

    return (
        <>
            {/* Mobile Menu */}
            <button className="mobi-toggle hamburger01" onClick={() => setIsMobileOpen(!isMobileOpen)}>
                <img src={require('../../assets/images/common/hamburger-ico.png')} alt="원격교육지원센터" className="hamb-one" />
            </button>
            {isMobileOpen && (
                <div className="mobile-menu">
                    <div className="m-gnb-top">
                        <ul>
                            <li><Link className="login" to="#a" title="로그인">로그인</Link></li>
                        </ul>
                    </div>
                    <button className="mobi-toggle hamburger02" onClick={() => setIsMobileOpen(!isMobileOpen)}>
                        <img src={require('../../assets/images/common/hamburger-close.png')} alt="원격교육지원센터" className="hamb-two" />
                    </button>
                    <ul className="dep1">
                        {menuData.map((menuItem, index) => {
                            const hasSub = Array.isArray(menuItem.sub);

                            return (
                                <li
                                    key={index}
                                    className={`${hasSub ? "has-sub" : ""
                                        } ${isActive(menuItem.path) ||
                                            menuItem.sub?.some(
                                                sub => isActive(sub.path) || sub.subSub?.some(subSub => isActive(subSub.path))
                                            )
                                            ? "acti"
                                            : ""
                                        } ${openMobileIndex === index ? "open" : ""}`}
                                >
                                    {/* nếu có sub thì dùng <a href="#!"> để toggle */}
                                    {Array.isArray(menuItem.sub) ? (
                                        <a
                                            href="#!"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setOpenMobileIndex(openMobileIndex === index ? null : index);
                                                setOpenSubIndex(null);
                                            }}
                                        >
                                            {menuItem.title}
                                        </a>
                                    ) : (
                                        <Link to={menuItem.path}>{menuItem.title}</Link>
                                    )}


                                    {/* Cấp 2 */}
                                    {openMobileIndex === index && hasSub && (
                                        <ul className="dep2">
                                            {menuItem.sub.map((subItem, subIndex) => {
                                                const hasSubSub = Array.isArray(subItem.subSub) && subItem.subSub.length > 0;

                                                return (


                                                    <li
                                                        key={subIndex}
                                                        className={`${hasSubSub ? "has-sub" : ""
                                                            } ${isActive(subItem.path) ||
                                                                subItem.subSub?.some(subSub => isActive(subSub.path))
                                                                ? "acti"
                                                                : ""
                                                            } ${openSubIndex === subIndex ? "open" : ""}`}
                                                    >
                                                        <Link
                                                            to={subItem.path}
                                                            title={subItem.title}
                                                            onClick={(e) => {
                                                                if (hasSubSub) {
                                                                    e.preventDefault();
                                                                    setOpenSubIndex(openSubIndex === subIndex ? null : subIndex);
                                                                }
                                                            }}
                                                        >
                                                            {subItem.title}
                                                        </Link>

                                                        {/* Cấp 3 */}
                                                        {openSubIndex === subIndex && hasSubSub && (
                                                            <ul className="dep3">
                                                                {subItem.subSub.map((subSubItem, idx) => (
                                                                    <li key={idx} className={isActive(subSubItem.path) ? "acti" : ""}>
                                                                        <Link
                                                                            to={subSubItem.path}

                                                                        >
                                                                            {subSubItem.title}
                                                                        </Link>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        )}
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    )}
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