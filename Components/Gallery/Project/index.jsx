import styles from "./style.module.css";

const index = ({ project }) => {
    return (
        <div className={styles.project}>
            <h1>{project.name}</h1>
            <p>{project.desc}</p>
        </div>
    );
};

export default index;
