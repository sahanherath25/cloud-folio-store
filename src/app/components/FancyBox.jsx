"use client"

import React from 'react';
import useFancybox from "@/app/hooks/useFancyBox";
import Image from "next/image";
import Link from "next/link";



function FancyBox(props) {

    const [fancyboxRef] = useFancybox({
        Thumbs: {
            type: "modern",
        },
        Toolbar: {
            display: {
                left: [],
                middle: [],
                right: ["zoom", "slideShow", "fullscreen", "download", "close"],
            },
            animated: true,
            dragToClose: true,
            placeFocusBack: true,
            Images: {
                zoom: true,
            },
        },
    });


    return (
        <div className={"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4 mb-14"} ref={fancyboxRef}>

            <a data-fancybox="gallery" href="">
                <Image
                    src={`https://lipsum.app/id/60/1600x1200`}
                    alt={"test"}
                    width={400}
                    height={300}
                />
            </a>

            <a data-fancybox="gallery" href="https://lipsum.app/id/61/1600x1200">
                {/*<img src="https://lipsum.app/id/61/200x150" alt="Sample image #2" />*/}
                <Image
                    src={`https://lipsum.app/id/61/1600x1200`}
                    alt={"test"}
                    width={400}
                    height={300}
                />
            </a>
            <a data-fancybox="gallery" href="https://lipsum.app/id/62/1600x1200">
                <Image
                    src={`https://lipsum.app/id/62/1600x120`}
                    alt={"Sample image #3"}
                    width={400}
                    height={300}
                />
            </a>

            <a data-fancybox="gallery" href="">
                <Image
                    src={`https://lipsum.app/id/60/1600x1200`}
                    alt={"test"}
                    width={400}
                    height={300}
                />
            </a>

            <a data-fancybox="gallery" href="https://lipsum.app/id/61/1600x1200">
                {/*<img src="https://lipsum.app/id/61/200x150" alt="Sample image #2" />*/}
                <Image
                    src={`https://lipsum.app/id/61/1600x1200`}
                    alt={"test"}
                    width={400}
                    height={300}
                />
            </a>
            <a data-fancybox="gallery" href="https://lipsum.app/id/62/1600x1200">
                <Image
                    src={`https://lipsum.app/id/62/1600x120`}
                    alt={"Sample image #3"}
                    width={400}
                    height={300}
                />
            </a>

        </div>
    );



 };


export default FancyBox;