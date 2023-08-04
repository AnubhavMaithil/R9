import styles from "./styles.module.css";
import Project from "./Project";

const Projects = [
    {
        name: "Project 1",
        desc: "something about 1",
        image: "one.jpg",
        color: "#dadada",
    },
    {
        name: "Project 2",
        desc: "something about 2",
        image: "two.jpeg",
        color: "#dadada",
    },
    {
        name: "Project 3",
        desc: "something about 3",
        image: "three.jpg",
        color: "#dadada",
    },
    {
        name: "Project 4",
        desc: "something about 4",
        image: "four.webp",
        color: "#dadada",
    },
];

const index = () => {
    return (
        <div className={styles.gallery}>
            <h1>Projects</h1>
            <div className={styles.projects}>
                {Projects.map((project, index) => {
                    console.log(project);
                    return <Project key={index} project={project} />;
                })}
            </div>
        </div>
    );
};

export default index;
