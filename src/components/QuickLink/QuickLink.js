import React, { useState, useEffect, useRef } from "react";
import "./QuickLink.css";
import { Link } from 'react-router-dom';
import dataQuick from '../../assets/fake-data/data-Quick';

const QuickLink = () => {

    const quickBoxRef = useRef(null);

    useEffect(() => {
        // Tương đương với $(document).ready()
        setTimeout(() => {
            document.documentElement.classList.remove('no-js');
        }, 10);

        if (window.App?.TableScroll?.init) {
            window.App.TableScroll.init(); // Nếu App.TableScroll.init tồn tại thì gọi
        }

        // Logic quickBox scroll
        const $sideBar = quickBoxRef.current;
        if (!$sideBar) return;

        const sideBarOffsetTop = $sideBar.offsetTop;
        const defaultTop = sideBarOffsetTop;

        const handleScroll = () => {
            const scrollY = window.scrollY;
            const stopPosition = 2700;

            if (scrollY > stopPosition) {
                $sideBar.style.position = 'absolute';
                $sideBar.style.top = `${stopPosition}px`;
            } else if (scrollY > sideBarOffsetTop) {
                $sideBar.style.position = 'absolute';
                $sideBar.style.top = `${scrollY + 60}px`;
            } else {
                $sideBar.style.position = 'absolute';
                $sideBar.style.top = `${defaultTop}px`;
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <div className="quick-box" ref={quickBoxRef}>
                <p>QUICK LINK</p>
                {dataQuick.map((item, index) => {
                    const isExternal = item.link.startsWith('http');
                    return (
                        <ul key={item.title}>
                            <li>
                                {isExternal ? (
                                    <a href={item.link} target="_blank" rel="noopener noreferrer" title="새창열기"
                                        key={index}
                                        style={{
                                            background: `url(${item.img}) no-repeat center top 10px`,
                                        }}>
                                        <span dangerouslySetInnerHTML={{ __html: item.title.join('<br />') }} />
                                    </a>
                                ) : (
                                    <Link to={item.link} title="새창열기"
                                        key={index}
                                        style={{
                                            background: `url(${item.img}) no-repeat center top 10px`,
                                        }}>
                                        <span dangerouslySetInnerHTML={{ __html: item.title.join('<br />') }} />
                                    </Link>
                                )}
                            </li>
                        </ul>
                    );
                })}
                <Link className="btn-top" href="#a" title="상단으로"
                    onClick={(e) => {
                        e.preventDefault(); // ngăn mặc định để không reload trang
                        window.scrollTo({ top: 0, behavior: 'smooth' }); // cuộn lên top mượt
                    }}
                >TOP</Link>
            </div>
        </>
    );
};

export default QuickLink;