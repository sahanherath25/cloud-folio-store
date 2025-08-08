import React from 'react';
import {SwiperSlide} from "swiper/react";
import Image from "next/image";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


function SwiperItem({imageUrl, alt, title, description}) {
    return (
        <SwiperSlide>
            <div className="relative w-full h-full">
                <Image
                    src={imageUrl}
                    alt={alt}
                    fill
                    className="object-cover"
                    priority
                />
                <div
                    className="absolute inset-0 bg-black/70 flex flex-col justify-center items-center text-white text-center px-4">
                    <h2 className="text-3xl sm:text-5xl font-bold mb-4">{title}</h2>
                    <p className="text-sm sm:text-lg max-w-xl">
                        {description}
                    </p>
                </div>
            </div>
        </SwiperSlide>

    )

}
;

export default SwiperItem;
