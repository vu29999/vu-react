import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

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

    const [showSubMenu, setShowSubMenu] = useState(true);
    const [showSubSubMenu, setShowSubSubMenu] = useState(true);

    useEffect(() => {
        setShowSubMenu(true);
        setShowSubSubMenu(true);
    }, [currentPath]);

    return (
        <div className="path-depth-wrap">
            <ul>
                {/* Menu cấp 1 */}
                <li>
                    <ul>
                        {menuData.map((menu, index) => (
                            <li key={index}>
                                <Link
                                    to={menu.path}
                                    className={currentMenu?.path === menu.path ? "active" : ""}
                                    onClick={() => {
                                        if (menu.path === currentMenu?.path) {
                                            setShowSubMenu(prev => !prev);
                                        }
                                    }}
                                >
                                    {menu.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </li>

                {/* Menu cấp 2 */}
                {currentMenu?.sub && (
                    <li>
                        {showSubMenu && (
                            <ul>
                                {currentMenu.sub.map((sub, index) => (
                                    <li key={index}>
                                        <Link
                                            to={sub.path}
                                            className={currentSub?.path === sub.path ? "active" : ""}
                                            onClick={() => {
                                                if (sub.path === currentSub?.path) {
                                                    setShowSubSubMenu(prev => !prev);
                                                }
                                            }}
                                        >
                                            {sub.title}
                                        </Link>

                                        {/* Menu cấp 3 */}
                                        {showSubSubMenu && currentSub?.subSub?.length > 0 && sub.path === currentSub.path && (
                                            <ul>
                                                {currentSub.subSub.map((subsub, i) => (
                                                    <li key={i}>
                                                        <Link
                                                            to={subsub.path}
                                                            className={currentPath === subsub.path ? "active" : ""}
                                                        >
                                                            {subsub.title}
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
                )}
            </ul>
        </div>
    );
};

export default SubMenu;
