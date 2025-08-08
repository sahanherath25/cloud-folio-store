"use client"

import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Pagination, Navigation} from "swiper/modules";
import { CircleSmall } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import SwiperItem from "@/app/components/SwiperItem";
import {sliderData} from "@/app/utils/data/sliderData";
import {nanoid} from "nanoid";

function FullSliderCode(props) {
    const myData = sliderData
    if (!myData) return null
    return (

        <div className="w-full  border-2 border-gray-200 overflow-hidden    ">
            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                pagination={
                    {
                        clickable: true,
                        dynamicBullets: true,
                        bulletSize: 20,
                        renderBullet: (index, className) => {
                            return `<span class="${className} rounded-none custom-bullet w-3 h-3 bg-amber-500 border-1">
                            <CircleSmall />
                                 </span>`;
                        }

                    }
                }
                className="h-screen"
            >
                {
                    myData.map((item, index) => {
                        console.log(" ITEM DATA  ", item)
                        return (
                            <SwiperSlide key={nanoid(4)}>
                                <SwiperItem
                                    alt={item.alt}
                                    description={item.description}
                                    imageUrl={item.imageUrl}
                                    title={item.title}
                                />
                            </SwiperSlide>
                        )
                    })
                }


            </Swiper>
        </div>
    )
}
;
export default FullSliderCode;