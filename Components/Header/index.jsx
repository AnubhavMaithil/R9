"use client";
import styles from "./style.module.css";
import Nav from "./nav";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";

const index = () => {
    const [isActive, setIsActive] = useState(false);

    return (
        <>
            <div className={styles.header}>
                <div className={styles.logo}>
                    <p className={styles.copyright}>©</p>
                    <div className={styles.name}>
                        <p className={styles.codeBy}>Code by</p>
                        <p className={styles.dennis}>Anubhav</p>
                        <p className={styles.snellenberg}>Maithil</p>
                    </div>
                </div>
                <div className={styles.nav}>
                    {/* <Magnetic> */}
                    <div className={styles.el}>
                        <a>Work</a>
                        <div className={styles.indicator}></div>
                    </div>
                    {/* </Magnetic> */}
                    {/* <Magnetic> */}
                    <div className={styles.el}>
                        <a>About</a>
                        <div className={styles.indicator}></div>
                    </div>
                    {/* </Magnetic> */}
                    {/* <Magnetic> */}
                    <div className={styles.el}>
                        <a>Contact</a>
                        <div className={styles.indicator}></div>
                    </div>
                    {/* </Magnetic> */}
                </div>
            </div>
            <div className={styles.headerButtonContainer}>
                <div
                    onClick={() => {
                        setIsActive(!isActive);
                    }}
                    className={styles.button}
                >
                    <div
                        className={`${styles.burger} ${
                            isActive ? styles.burgerActive : ""
                        }`}
                    ></div>
                </div>
            </div>
            <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
        </>
    );
};

export default index;
