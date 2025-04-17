import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./MainTest.css";

const Menu06 = () => {
    const [hoverIndex, setHoverIndex] = useState(null);
    const [isListHovered, setIsListHovered] = useState(false);
    const bgRef = useRef(null);
    const subBoxRefs = useRef([]);

    // Tính chiều cao lớn nhất của tất cả sub-mn-box khi hover vào toàn bộ danh sách
    useEffect(() => {
        if (isListHovered && subBoxRefs.current.length > 0) {
            const maxHeight = Math.max(
                ...subBoxRefs.current.map((ref) => (ref ? ref.offsetHeight : 0))
            );
            if (bgRef.current) {
                bgRef.current.style.height = `${maxHeight}px`;
            }
        } else if (bgRef.current) {
            bgRef.current.style.height = `0px`;
        }
    }, [isListHovered]);

    return (
        <div className={`wrap-a ${isListHovered ? "on" : ""}`}
            onMouseEnter={() => setIsListHovered(true)}
            onMouseLeave={() => {
                setIsListHovered(false);
                setHoverIndex(null);
            }}
        >
            <h1>abcabc</h1>
            <ul
                className="depth_01"

            >
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

export default Menu06;

{/* <style>
.wrap-a {
    position: relative;
    z-index: 100;
    height: 100px;
    margin-bottom: 200px;
}

.wrap-a .depth_01 {
    display: flex;
    position: relative;
    z-index: 10;
}

.wrap-a .depth_01 li {
    position: relative;
    padding: 20px;
}

.sub-mn-box {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background: white;
    z-index: 40;
}

.wrap-a.on .depth_01 li .sub-mn-box {
    display: block;
}

.wrap-a .depth_01 li.on-menu {
    font-weight: bold;
    color: red;
}

.bg-a {
    position: absolute;
    left: 0;
    right: 0;
    top: 100%;
    background: #000;
    height: 0;
    transition: height 0.3s ease;
    z-index: 1;
}
</style> */}
