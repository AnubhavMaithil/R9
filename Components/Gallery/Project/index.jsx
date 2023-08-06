import styles from "./style.module.css";

function Project({ project, index, setModal }) {
    const { name, desc } = project;
    return (
        <div className={styles.project}>
            <h1>{name}</h1>
            <p>{desc}</p>
        </div>
    );
}

export default Project;
