import { useLocation } from "react-router-dom";
import "./SubVisual.css";

const SubVisual = ({ menuData }) => {
    const location = useLocation();
    const path = location.pathname;

    let menu1 = null;

    menuData.forEach(item => {
        if (
            path === item.path ||
            path.startsWith(item.path + "/") ||
            (item.sub && item.sub.some(sub =>
                path === sub.path ||
                path.startsWith(sub.path + "/") ||
                (sub.subSub && sub.subSub.some(subsub =>
                    path === subsub.path || path.startsWith(subsub.path + "/")
                ))
            ))
        ) {
            menu1 = item;
        }
    });

    return (
        <div className="sub-visual-wrap">
            <div className="sub-visual-box">
                <div className="sub-visual-cont">
                    <h2>{menu1?.title || "서브 비주얼"}</h2>
                </div>
            </div>
        </div>
    );
};

export default SubVisual;
