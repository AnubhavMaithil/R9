"use Client";

import Image from "next/image";
import styles from "./styles.module.css";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

const index = () => {
    const slider = useRef(null);
    const firstText = useRef(null);
    const secondText = useRef(null);

    let xPercent = 0;
    let direction = -1;

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(slider.current, {
            scrollTrigger: {
                trigger: document.documentElement,
                start: 0,
                end: window.innerHeight,
                scrub: 0.25,
                onUpdate: (e) => (direction = e.direction * -1),
            },
            x: "-500px",
        });
        requestAnimationFrame(animate);
    });

    const animate = () => {
        if (xPercent < -100) {
            xPercent = 0;
        } else if (xPercent > 0) {
            xPercent = -100;
        }
        gsap.set(firstText.current, { xPercent });
        gsap.set(secondText.current, { xPercent });

        xPercent += direction * 0.1;
        requestAnimationFrame(animate);
    };

    return (
        <div className={styles.landing}>
            <Image src={"/background.jpg"} fill={true} alt="bhai ki photo" />

            <div className={styles.content}>
                <Image
                    src={"/arrow.svg"}
                    width={20}
                    height={20}
                    alt="arrow"
                    data-scroll
                    data-scroll-speed="0.1"
                />
                <div data-scroll data-scroll-speed="0.2">
                    <p>Hello</p>
                    <p>Photo achhi nahi hai pata hai</p>
                </div>
            </div>

            <div className={styles.sliderContainer}>
                <div ref={slider} className={styles.slider}>
                    <p ref={firstText}>Something Random -</p>
                    <p ref={secondText}>Something Random -</p>
                </div>
            </div>
        </div>
    );
};

export default index;
