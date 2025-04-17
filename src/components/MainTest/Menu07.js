import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./MainTest.css";

const Menu07 = () => {
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

    return (
        <div
            className={`wrap-a ${hoverIndex !== null ? "on" : ""}`}
            onMouseLeave={() => setHoverIndex(null)}
        >
            <h1>abcabc</h1>

            <ul className="depth_01">
                {[1, 2].map((item, index) => (
                    <li
                        key={index}
                        className={hoverIndex === index ? "on-menu" : ""}
                        onMouseEnter={() => setHoverIndex(index)}
                    >
                        menu 0{item}
                        <div
                            className="sub-mn-box"
                            ref={(el) => (subBoxRefs.current[index] = el)}
                        >
                            <p>menu 0{item}</p>
                            <ul className="depth_02">
                                <li>menu sub 01</li>
                                <li>menu sub 02</li>
                                {item === 2 && (
                                    <>
                                        <li>menu sub 03</li>
                                        <li>menu sub 04</li>
                                    </>
                                )}
                            </ul>
                        </div>
                    </li>
                ))}
            </ul>

            <div className="bg-a" ref={bgRef}></div>
        </div>
    );
};

export default Menu07;

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
