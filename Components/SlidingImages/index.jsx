import style from "./styles.module.css";
import Image from "next/image";

import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

const slider1 = [
    {
        color: "#e3e5e7",
        src: "c2.jpg",
    },
    {
        color: "#d6d7dc",
        src: "decimal.jpg",
    },
    {
        color: "#e3e3e3",
        src: "funny.jpg",
    },
    {
        color: "#21242b",
        src: "google.jpg",
    },
];

const slider2 = [
    {
        color: "#d4e3ec",
        src: "maven.jpg",
    },
    {
        color: "#e5e0e1",
        src: "panda.jpg",
    },
    {
        color: "#d7d4cf",
        src: "powell.jpg",
    },
    {
        color: "#e1dad6",
        src: "wix.jpg",
    },
];

const index = () => {
    const container = useRef(null);

    const { scrollYProgress } = useScroll({
        trigger: container,
        offset: ["start end", "end start"],
    });

    const x1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
    const x2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
    const height = useTransform(scrollYProgress, [0, 1], [50, 0]);

    return (
        <div className={style.slidingimages} ref={container}>
            <motion.div className={style.slider} style={{ x: x1 }}>
                {slider1.map((photo, index) => {
                    return (
                        <div
                            className={style.photo}
                            key={index}
                            style={{ backgroundColor: photo.color }}
                        >
                            <img src={`${photo.src}`} alt="" />
                        </div>
                    );
                })}
            </motion.div>
            <motion.div className={style.slider} style={{ x: x2 }}>
                {slider2.map((photo, index) => {
                    return (
                        <div
                            className={style.photo}
                            key={index}
                            style={{ backgroundColor: photo.color }}
                        >
                            <img src={`${photo.src}`} alt="" />
                        </div>
                    );
                })}
            </motion.div>
        </div>
    );
};

export default index;
