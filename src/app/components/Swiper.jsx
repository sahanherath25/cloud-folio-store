"use client"

import React from 'react';
import {Autoplay, Navigation, Pagination} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import SwiperItem from "@/app/components/SwiperItem";


function CustomSwiper({data}) {

    return (

            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                pagination={{clickable: true}}
                navigation
                className="h-screen"
            >

                {data.map((item)=>{
                    return(
                        <SwiperItem
                            alt={item.alt}
                            key={item.title}
                            description={item.description}
                            imageUrl={item.imageUrl}
                            title={item.title}

                        />
                    )
                })}

            </Swiper>



    )

};


export default CustomSwiper;