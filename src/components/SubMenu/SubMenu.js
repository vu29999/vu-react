import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";


// Tìm menu cấp 1 theo path hiện tại
const findCurrentMenu = (menuData, path) => {
    return menuData.find(menu =>
        path === menu.path ||
        path.startsWith(menu.path + "/") ||
        menu.sub?.some(sub =>
            path === sub.path ||
            path.startsWith(sub.path + "/") ||
            sub.subSub?.some(subsub => path === subsub.path || path.startsWith(subsub.path + "/"))
        )
    );
};

// Tìm menu cấp 2 theo path hiện tại
const findCurrentSub = (menu, path) => {
    return menu?.sub?.find(sub =>
        path === sub.path ||
        path.startsWith(sub.path + "/") ||
        sub.subSub?.some(subsub => path === subsub.path || path.startsWith(subsub.path + "/"))
    );
};

const SubMenu = ({ menuData }) => {
    const location = useLocation();
    const currentPath = location.pathname;

    const currentMenu = findCurrentMenu(menuData, currentPath);
    const currentSub = findCurrentSub(currentMenu, currentPath);

    const [activeMenu1, setActiveMenu1] = useState(false); // Điều khiển mở menu cấp 1
    const [activeMenu2, setActiveMenu2] = useState(false); // Điều khiển mở menu cấp 2

    const menu1Ref = useRef(null); // Tham chiếu tới menu cấp 1
    const menu2Ref = useRef(null); // Tham chiếu tới menu cấp 2

    useEffect(() => {
        // Khi path thay đổi, đảm bảo trạng thái được reset
        setActiveMenu1(false);
        setActiveMenu2(false);
    }, [currentPath]);

    useEffect(() => {
        const handleClick = (e) => {
            const isClickInsideMenu1 = menu1Ref.current?.contains(e.target);
            const isClickInsideMenu2 = menu2Ref.current?.contains(e.target);

            // Nếu click không nằm trong cả hai menu thì đóng cả hai
            if (!isClickInsideMenu1 && !isClickInsideMenu2) {
                setActiveMenu1(false);
                setActiveMenu2(false);
            }
        };

        document.addEventListener("click", handleClick);
        return () => {
            document.removeEventListener("click", handleClick);
        };
    }, []);


    return (
        <div className="path-wrap">
            <div className="path-box">
                <div className="path">
                    <Link to="/" className="path-home" title="홈 바로가기">
                        <span className="hide">홈 바로가기</span>
                    </Link>
                    <div className="path-depth-wrap">
                        <ul>
                            {/* Menu cấp 1 */}
                            <li ref={menu1Ref} className={activeMenu1 ? "active" : ""}>
                                <button
                                    className={`path-selected ${activeMenu1 ? "active" : ""}`}
                                    onClick={() => setActiveMenu1(prev => !prev)}

                                >
                                    {currentMenu?.title || "메뉴 전체 보기"}
                                </button>
                                {activeMenu1 && (
                                    <ul className="path-depth">
                                        {menuData.map((menu, index) => (
                                            <li key={index}>
                                                <Link
                                                    to={menu.path}
                                                    className={currentMenu?.path === menu.path ? "active" : ""}
                                                >
                                                    {menu.title}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>

                            {/* Menu cấp 2 */}
                            {currentMenu?.sub && (
                                <li ref={menu2Ref} className={activeMenu2 ? "active" : ""}>
                                    <button
                                        className={`path-selected ${activeMenu2 ? "active" : ""}`}
                                        onClick={() => setActiveMenu2(prev => !prev)} // Toggle menu cấp 2
                                    >
                                        {currentSub?.title || "서브 메뉴"}
                                    </button>
                                    {activeMenu2 && (
                                        <ul className="path-depth">
                                            {currentMenu.sub.map((sub, index) => (
                                                <li key={index}>
                                                    <Link
                                                        to={sub.path}
                                                        className={currentPath === sub.path ? "active" : ""}
                                                    >
                                                        {sub.title}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubMenu;
