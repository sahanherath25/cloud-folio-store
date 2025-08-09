"use client";

import HeroSliderHome from "@/app/components/HeroSliderHome";
import FullSliderCode from "@/app/components/fullSliderCode";
import HomeIntro from "@/app/components/HomeIntro";
import AnimatedForm from "@/app/components/Form";
import CTA from "@/app/components/CTA";
import FancyBox from "@/app/components/FancyBox";
// import CustomMap from "@/app/components/CustomMap";

// import dynamic from "next/dynamic";
//
// const CustomMap = dynamic(() => import("@/app/components/CustomMap"), {
//     ssr: false
// });

import dynamic from "next/dynamic";

const CustomMap = dynamic(() => import("@/app/components/CustomMap"), {
    ssr: false
});



export default function Home() {
  return (
    <div className=" ">
        <HeroSliderHome/>
        {/*<FullSliderCode/>*/}
        <HomeIntro/>
        <AnimatedForm/>
        <CTA/>
        <CustomMap/>
        <FancyBox/>
    </div>
  );
}
