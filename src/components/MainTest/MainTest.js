import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./MainTest.css";

const MainTest = () => {
    const menuData = [
        {
            title: "menu",
            sub: [
                {
                    title: "menu sub 01",
                    subSub: ["menu sub-sub 01", "menu sub-sub 02"]
                },
                {
                    title: "menu sub 02",
                    subSub: []
                }
            ]
        },
        {
            title: "about",
            sub: [
                {
                    title: "about sub 01",
                    subSub: ["about sub-sub 01"]
                },
                {
                    title: "about sub 02",
                    subSub: []
                }
            ]
        },
        {
            title: "contact",
            sub: ["contact 01", "contact 02"],
        },
    ];

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
    const [openMobileIndex, setOpenMobileIndex] = useState(null); // cấp 1
    const [openSubIndex, setOpenSubIndex] = useState(null);

    return (
        <div
            className={`wrap-a ${hoverIndex !== null ? "on" : ""}`}
            onMouseLeave={() => setHoverIndex(null)}
        >
            <h1>abcabc</h1>

            <ul className="depth_01">
                {menuData.map((menuItem, index) => (
                    <li
                        key={index}
                        className={hoverIndex === index ? "on-menu" : ""}
                        onMouseEnter={() => setHoverIndex(index)}
                    >
                        {menuItem.title}
                        <div
                            className="sub-mn-box"
                            ref={(el) => (subBoxRefs.current[index] = el)}
                        >
                            <p>{menuItem.title}</p>
                            <ul className="depth_02">
                                {menuItem.sub.map((sub, subIndex) => (
                                    <li key={subIndex}>
                                        {sub.title}
                                        {sub.subSub && sub.subSub.length > 0 && (
                                            <ul className="depth_03">
                                                {sub.subSub.map((item, idx) => (
                                                    <li key={idx}>{item}</li>
                                                ))}
                                            </ul>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </li>
                ))}
            </ul>

            <button className="mobi-toggle" onClick={() => setIsMobileOpen(!isMobileOpen)}>
                ☰ Menu
            </button>

            {/* Mobile Menu */}
            {isMobileOpen && (
                <div className="mobile-menu">
                    <ul>
                        {menuData.map((menuItem, index) => (
                            <li key={index}>
                                <Link
                                    href="#!"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setOpenMobileIndex(openMobileIndex === index ? null : index);
                                        setOpenSubIndex(null); // reset cấp 2 khi đổi menu chính
                                    }}
                                >
                                    {menuItem.title}
                                </Link>

                                {openMobileIndex === index && (
                                    <ul className="sub-menu">
                                        {menuItem.sub.map((subItem, subIndex) => (
                                            <li key={subIndex}>
                                                <Link
                                                    href="#!"
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        setOpenSubIndex(openSubIndex === subIndex ? null : subIndex);
                                                    }}
                                                >
                                                    {subItem.title}
                                                </Link>

                                                {openSubIndex === subIndex && subItem.subSub.length > 0 && (
                                                    <ul className="sub-sub-menu">
                                                        {subItem.subSub.map((item, idx) => (
                                                            <li key={idx}>{item}</li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            )}


            <div className="bg-a" ref={bgRef}></div>
        </div>


    );
};

export default MainTest;


{/* {isMobileOpen && (
                            <div className="mobile-menu">
                                <ul>
                                    {menuData.map((menuItem, index) => (
                                        <li key={index}>
                                            <Link
                                                to={menuItem.path}
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    setOpenMobileIndex(openMobileIndex === index ? null : index);
                                                    setOpenSubIndex(null); // reset cấp 2 khi đổi menu chính
                                                }}
                                            >
                                                {menuItem.title}
                                            </Link>

                                            {openMobileIndex === index && (
                                                <ul className="sub-menu">
                                                    {menuItem.sub.map((subItem, subIndex) => (
                                                        <li key={subIndex}>
                                                            <div className="sub-toggle">
                                                                <Link to={subItem.path} title={subItem.title}>
                                                                    {subItem.title}
                                                                </Link>
                                                                {subItem.subSub.length > 0 && (
                                                                    <button
                                                                        className="toggle-btn"
                                                                        onClick={(e) => {
                                                                            e.preventDefault();
                                                                            setOpenSubIndex(openSubIndex === subIndex ? null : subIndex);
                                                                        }}
                                                                    >
                                                                        {openSubIndex === subIndex ? "▲" : "▼"}
                                                                    </button>
                                                                )}
                                                            </div>

                                                            {openSubIndex === subIndex && subItem.subSub.length > 0 && (
                                                                <ul className="sub-sub-menu">
                                                                    {subItem.subSub.map((subSubItem, idx) => (
                                                                        <li key={idx}>
                                                                            <Link to={subSubItem.path} title={subSubItem.title}>
                                                                                {subSubItem.title}
                                                                            </Link>
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            )}
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}

                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )} */}
