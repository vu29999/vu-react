import { useEffect } from "react";

import Header from "../components/Header/Header";
import MainVisual from "../components/MainVisual/MainVisual";
import MainContent01 from "../components/MainContent01/MainContent01";
import MainContent02 from "../components/MainContent02/MainContent02";
import MainContent03 from "../components/MainContent03/MainContent03";
import QuickLink from "../components/QuickLink/QuickLink";
import Footer from "../components/Footer/Footer";

const Home = () => {
    useEffect(() => {
        // Khi vào trang Home, thêm class 'main'
        document.body.classList.add('main');

        // Khi rời khỏi trang Home, xóa class 'main'
        return () => {
            document.body.classList.remove('main');
        };
    }, []);

    return (
        <>
            <Header />
            <MainVisual />
            <MainContent01 />
            <MainContent02 />
            <MainContent03 />
            <QuickLink />
            <Footer />
        </>
    );
};

export default Home;
