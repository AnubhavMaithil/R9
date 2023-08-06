import styles from "./style.module.css";
import Image from "next/image";
const index = ({ modal, projects }) => {
    const { active, index } = modal;

    return (
        <>
            <div className={styles.modalContainer}>
                <div
                    className={styles.modalSlider}
                    style={{ top: index * -100 + "%" }}
                >
                    {projects.map((project, index) => {
                        const { image, color } = project;
                        return (
                            <div key={index} className={styles.modal}>
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
            </div>
            <div className={styles.cursor}>View</div>
        </>
    );
};

export default index;
