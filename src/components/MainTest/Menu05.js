import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./MainTest.css";

const Main05 = () => {
    const [hoverIndex, setHoverIndex] = useState(null);
    const bgRef = useRef(null);
    const subBoxRefs = useRef([]); // Mảng ref cho từng submenu

    // Cập nhật chiều cao bg-a khi hoverIndex thay đổi
    useEffect(() => {
        if (hoverIndex !== null && subBoxRefs.current[hoverIndex]) {
            const height = subBoxRefs.current[hoverIndex].offsetHeight;
            if (bgRef.current) {
                bgRef.current.style.height = `${height}px`;
            }
        } else if (bgRef.current) {
            bgRef.current.style.height = `0px`; // Reset height
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

export default Main05;
