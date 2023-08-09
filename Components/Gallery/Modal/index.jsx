import styles from "./style.module.css";
import Image from "next/image";

import { motion } from "framer-motion";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

const animateVarients = {
    initial: { scale: 0 },
    open: {
        scale: 1,
        transition: { duration: 0.45, ease: [0.23, 1, 0.32, 1] },
    },
    exit: {
        scale: 0,
        transition: { duration: 0.35, ease: [0.23, 1, 0.32, 1] },
    },
};

const index = ({ modal, projects }) => {
    const { active, index } = modal;

    const cursor = useRef(null);
    const modalContainer = useRef(null);

    useEffect(() => {
        const cursorElement = cursor.current;
        const modalElement = modalContainer.current;

        let cursorX = gsap.quickTo(cursorElement, "x", {
            duration: 0.4,
            ease: "power3",
        });
        let cursorY = gsap.quickTo(cursorElement, "y", {
            duration: 0.4,
            ease: "power3",
        });
        let ModalX = gsap.quickTo(modalElement, "x", {
            duration: 0.8,
            ease: "power3",
        });
        let ModalY = gsap.quickTo(modalElement, "y", {
            duration: 0.8,
            ease: "power3",
        });

        window.addEventListener("mousemove", (e) => {
            let x = e.pageX;
            let y = e.pageY;

            gsap.set(cursorElement, { x: x, y: y });
            gsap.set(modalElement, { x: x, y: y });
        });
    });

    return (
        <>
            <motion.div
                variants={animateVarients}
                initial="initial"
                animate={active ? "open" : "exit"}
                className={styles.modalContainer}
                ref={modalContainer}
            >
                <div
                    className={styles.modalSlider}
                    style={{ top: index * -100 + "%" }}
                >
                    {projects.map((project, index) => {
                        const { image, color } = project;
                        return (
                            <div
                                key={index}
                                className={styles.modal}
                                style={{ backgroundColor: `${color}` }}
                            >
                                <Image
                                    src={`/${image}`}
                                    width={300}
                                    height={0}
                                    alt="some image"
                                />
                            </div>
                        );
                    })}
                </div>
            </motion.div>
            <motion.div
                variants={animateVarients}
                initial="initial"
                animate={active ? "open" : "exit"}
                className={styles.cursor}
                ref={cursor}
            >
                View
            </motion.div>

            <button className={styles.button}>More Work</button>
        </>
    );
};

export default index;
