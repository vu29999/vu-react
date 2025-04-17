import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./MainTest.css";

const Main08 = () => {
    const menuData = [
        {
            title: "menu",
            sub: ["menu sub 01", "menu sub 02"],
        },
        {
            title: "about",
            sub: ["about 01", "about 02"],
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
    const [openMobileIndex, setOpenMobileIndex] = useState(null);

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
                                    <li key={subIndex}>{sub}</li>
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
                                <a
                                    href="#!"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setOpenMobileIndex(openMobileIndex === index ? null : index);
                                    }}
                                >
                                    {menuItem.title}
                                </a>
                                {/* Submenu toggle */}
                                {openMobileIndex === index && (
                                    <ul className="sub-menu">
                                        {menuItem.sub.map((subItem, subIndex) => (
                                            <li key={subIndex}>{subItem}</li>
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

export default Main08;


// .wrap-a {
//     position: relative;
//     z-index: 100;
//     height: 100px;
//     margin-bottom: 500px;
// }

// .depth_01 {
//     display: flex;
//     position: relative;
//     z-index: 10;
// }

// .depth_01 li {
//     position: relative;
//     padding: 20px;
// }

// .sub-mn-box {
//     display: none;
//     position: absolute;
//     top: 100%;
//     left: 0;
//     width: 100%;
//     background: white;
//     z-index: 40;
// }

// .wrap-a.on .depth_01 li .sub-mn-box {
//     display: block;
// }

// .depth_01 li.on-menu {
//     font-weight: bold;
//     color: red;
// }

// .bg-a {
//     position: absolute;
//     left: 0;
//     right: 0;
//     top: 100%;
//     background: #000;
//     height: 0;
//     opacity: 0;
//     padding-bottom: 30px;
//     transition: height 0.3s ease, opacity 0.3s ease;
//     z-index: 1;
// }

// .wrap-a.on .bg-a {
//     display: block;
//     opacity: 1;
// }

// .mobile-menu,
// .mobi-toggle {
//     display: none;
// }

// @media (max-width: 1024px) {

//     .bg-a,
//     .depth_01 {
//         display: none;
//     }

//     .mobi-toggle {
//         display: block;
//         padding: 10px;
//         background: #333;
//         color: white;
//         font-size: 16px;
//         border: none;
//         margin-top: 50px;
//     }

//     .mobile-menu {
//         display: block;
//         background: #f9f9f9;
//         padding: 10px;
//     }

//     .mobile-menu ul {
//         list-style: none;
//         padding: 0;
//     }

//     .mobile-menu ul li {
//         padding: 5px 0;
//     }
// }

// @media (max-width: 768px) {
//     .mobi-toggle {
//         display: block;
//     }

//     .wrap-a,
//     .depth_01 {
//         display: none;
//         /* Ẩn desktop menu */
//     }

//     .mobile-menu {
//         display: block;
//     }
// }
