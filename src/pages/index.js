import Greeting from "../pages/Greeting/Greeting";
import Guide from "../pages/Guide/Guide";
import TabMn01 from "../pages/TabContent/TabMn01";
import TabMn02 from "../pages/TabContent/TabMn02";
import TabMn03 from "../pages/TabContent/TabMn03";
import About from "../pages/About";
import Team from "./Team/Team";
import Team02 from "./Team/Team02";
import Service from "../pages/Service";
import Home from "../pages/Home";

const routes = [
    { path: '/', element: <Home /> },
    { path: '/intro/greeting', element: <Greeting /> },
    { path: '/intro/guide', element: <Guide /> },
    { path: '/intro/tabmn01', element: <TabMn01 /> },
    { path: '/intro/tabmn02', element: <TabMn02 /> },
    { path: '/intro/tabmn03', element: <TabMn03 /> },
    { path: '/team/team', element: <Team /> },
    { path: '/team/team02', element: <Team02 /> },
    { path: '/about', element: <About /> },
    { path: '/service', element: <Service /> },
]

export default routes;
// path="/home" element={<Home to="/" replace />}
