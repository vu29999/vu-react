import React, { useRef } from 'react';
import "./MainVisual.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import dataVisual from '../../assets/fake-data/data-MainVisual';
import { Link } from 'react-router-dom';

import { Navigation, Pagination } from 'swiper/modules';

const MainVisual = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <>
            <div className="main-visual-wrap">
                <div className="main-visual-box">
                    <div className="main-visual-content">
                        <div className="custom-navigation">
                            <button ref={prevRef} className="swiper-button-prev custom-nav">‹</button>
                            <button ref={nextRef} className="swiper-button-next custom-nav">›</button>
                        </div>
                        <Swiper
                            modules={[Navigation, Pagination]}  // Sử dụng các module Navigation và Pagination
                            loop={true}  // Tự động quay lại slide đầu tiên khi đến cuối
                            spaceBetween={50}  // Khoảng cách giữa các slide
                            slidesPerView={1}  // Số lượng slide hiển thị cùng lúc
                            speed={800}  // Thời gian chuyển slide (miliseconds)
                            pagination={{ clickable: true }}  // Bật Pagination (chấm điều hướng)
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            navigation={{
                                prevEl: prevRef.current,
                                nextEl: nextRef.current,
                            }}
                            onBeforeInit={(swiper) => {
                                swiper.params.navigation.prevEl = prevRef.current;
                                swiper.params.navigation.nextEl = nextRef.current;
                            }}
                        >
                            {/* Các slide */}
                            {dataVisual.map(item => (
                                <SwiperSlide key={item.id}>
                                    <div className="main-visual-item">
                                        <div className="main-visual-left">
                                            <Link className="main-visual-link" to={item.link} title="new window">
                                                <img src={item.img} alt={item.title} />
                                            </Link>
                                        </div>
                                        <div className="main-visual-right">
                                            <h4>{item.title}</h4>
                                            <div className="main-visual-desc">
                                                <p><span>{item.description}</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                            {/* Thêm các slide khác nếu cần */}
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MainVisual;
