import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';

import { EffectCoverflow, Pagination, Navigation } from 'swiper';

import CherryBlossom from '../assets/parlor/CherryBlossom.png';
import RavenRising from '../assets//parlor/RavenRising.png';
import Samuri from '../assets/parlor/Samuri.png';
import SpaceBees from '../assets/parlor/SpaceBees.png';
import SpaceCowboy from '../assets/parlor/SpaceCowboy.png';
import StrangeHoliday from '../assets/parlor/StrangeHoliday.png';
import Sunrise from '../assets/parlor/Sunrise.png';
import Valhalla from '../assets/parlor/Valhalla.png';
import WesternSkies from '../assets/parlor/WesternSkies.png';
import '../styles/skiCard.css';

function SkiDesigns(){
    return (
        <div className="container">
            <h1 className="heading">Parlor Ski Designs</h1>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={3}
                coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5,
                }}
                pagination={{ el: '.swiper-pagination', clickable: true }}
                navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
                clickable: true,
                }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className="swiper_container"
            >
                <SwiperSlide className="slide">
                    <img className="ski" src={CherryBlossom} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="ski" src={RavenRising} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="ski" src={Samuri} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="ski" src={SpaceBees} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="ski" src={SpaceCowboy} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="ski" src={StrangeHoliday} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="ski" src={Sunrise} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="ski" src={Valhalla} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="ski" src={WesternSkies} alt="slide_image" />
                </SwiperSlide>

                <div className="slider-controler">

                    <div className="swiper-button-prev slider-arrow">
                        <ion-icon name="arrow-back-outline"></ion-icon>
                    </div>

                    <div className="swiper-button-next slider-arrow">
                        <ion-icon name="arrow-forward-outline"></ion-icon>
                    </div>
                    <div className="swiper-pagination"></div>

                </div>
            </Swiper>
        </div>
    )
};

export default SkiDesigns;

