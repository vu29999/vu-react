import { useLocation } from "react-router-dom";
import "./TitlePage.css";

const TitlePage = ({ menuData }) => {
    const location = useLocation();
    const path = location.pathname;

    let menu1 = null;
    let menu2 = null;
    let menu3 = null;

    // Duyệt menu cấp 1
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


            // Duyệt menu cấp 2
            if (item.sub) {
                item.sub.forEach(sub => {
                    if (
                        path === sub.path ||
                        path.startsWith(sub.path + "/") ||
                        (sub.subSub && sub.subSub.some(subsub => path === subsub.path || path.startsWith(subsub.path + "/")))
                    ) {
                        menu2 = sub;

                        // Duyệt menu cấp 3
                        if (sub.subSub) {
                            const subSubMatch = sub.subSub.find(subsub =>
                                path === subsub.path || path.startsWith(subsub.path + "/")
                            );
                            if (subSubMatch) {
                                menu3 = subSubMatch;
                            }
                        }
                    }
                });
            }
        }
    });

    return (
        <div className="title-box">
            <div className="sub-title">
                <h3>{menu3?.title || menu2?.title || menu1?.title}</h3>
            </div>
        </div>
    );
};

export default TitlePage;
