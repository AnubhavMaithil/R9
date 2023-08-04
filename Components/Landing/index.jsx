import Image from "next/image";
import styles from "./styles.module.css";

// import { useRef } from "react";
import gsap from "gsap";

const index = () => {
    return (
        <div className={styles.landing}>
            <Image src={"/photo.jpg"} fill={true} alt="bhai ki photo" />

            <div className={styles.content}>
                <Image
                    src={"/arrow.svg"}
                    width={10}
                    height={10}
                    alt="arrow"
                    data-scroll
                    data-scroll-speed="0.1"
                />
                <div data-scroll data-scroll-speed="0.2">
                    <p>Hello</p>
                    <p>Photo achhi nahi hai pata hai</p>
                </div>
            </div>

            <div className={styles.slider}>
                <p>Something Random -</p>
                <p>Something Random -</p>
            </div>
        </div>
    );
};

export default index;
