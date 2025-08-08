"use client"

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function HomeIntro() {
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const imageRef = useRef(null);

    // Initialize GSAP
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        // Safe animation function
        const animateElements = () => {
            if (titleRef.current) {
                gsap.from(titleRef.current, {
                    opacity: 0,
                    y: 50,
                    duration: 1,
                    delay: 0.3,
                    ease: "power3.out",
                });
            }

            if (subtitleRef.current) {
                gsap.from(subtitleRef.current, {
                    opacity: 0,
                    y: 30,
                    duration: 0.8,
                    delay: 0.6,
                    ease: "sine.out",
                });
            }

            if (imageRef.current) {
                gsap.from(imageRef.current, {
                    opacity: 0,
                    x: 50,
                    duration: 1.2,
                    delay: 0.4,
                    ease: "back.out(1.7)",
                });

                // Floating animation
                gsap.to(imageRef.current, {
                    y: -15,
                    duration: 2,
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut",
                });
            }
        };

        // Wait for all refs to be available
        const timer = setTimeout(animateElements, 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="flex flex-col lg:flex-row items-center justify-between gap-10 px-5 py-20 md:px-10 lg:px-20 bg-gradient-to-r from-gray-50 to-white">
            {/* Text Content */}
            <div className="max-w-2xl space-y-6 z-10">
                <h1
                    ref={titleRef}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
                >
                    Explore <span className="text-indigo-600 relative">Thousands
                        <span className="absolute bottom-2 left-0 w-full h-2 bg-indigo-200/50 rounded-full -z-10"></span>
                    </span> of Free PDF Books
                </h1>

                <p
                    ref={subtitleRef}
                    className="text-lg md:text-xl text-gray-600"
                >
                    Download textbooks, novels, and more—all in one place.
                </p>

                <div className="flex flex-wrap gap-4">
                    <button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-200">
                        Browse Library
                    </button>
                    <button className="px-6 py-3 border border-indigo-600 text-indigo-600 font-semibold rounded-lg hover:bg-indigo-50 transition-all group">
                        Trending Now
                        <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                    </button>
                </div>
            </div>

            {/* Image */}
            <div className="shrink-0">
                <img
                    ref={imageRef}
                    src="https://images.unsplash.com/photo-1706862622614-fd62a5cdd318?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with your image
                    alt="Book stack"
                    className="w-full max-w-md xl:max-w-lg drop-shadow-xl"
                />
            </div>
        </section>
    );
}

export default HomeIntro;