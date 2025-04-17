import React from "react";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";

const TabMenu = ({ menuData }) => {
    const location = useLocation();

    // Tìm menu cấp 2 hiện tại dựa trên path
    const currentSub = menuData.flatMap(menu => menu.sub || [])
        .find(sub =>
            location.pathname === sub.path ||
            location.pathname.startsWith(sub.path + "/") ||
            (sub.subSub && sub.subSub.some(subsub =>
                location.pathname === subsub.path || location.pathname.startsWith(subsub.path + "/")
            ))
        );

    const subSubMenus = currentSub?.subSub || [];

    const len = subSubMenus.length;
    const cls = `row${len < 10 ? "0" : ""}${len}`;

    return (
        len > 0 && (
            <ul className={classNames("tab-ul01", cls)}>
                {subSubMenus.map((menu, index) => {
                    const isActive = location.pathname.startsWith(menu.path);
                    const isFirst = index === 0;
                    const isLast = index === len - 1;

                    return (
                        <li
                            key={menu.menuCd}
                            className={classNames({
                                active: isActive,
                                first: isFirst,
                                last: isLast,
                            })}
                        >
                            <Link to={menu.path} id={`tab-menu-${menu.menuCd}`}>
                                <span>{menu.title}</span>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        )
    );
};

export default TabMenu;
