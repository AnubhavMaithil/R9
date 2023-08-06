"use client";

import styles from "./styles.module.css";
import Project from "./Project";
import { useState } from "react";

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
        color: "#d0d0d0",
    },
    {
        name: "Project 3",
        desc: "something about 3",
        image: "three.jpg",
        color: "#eeeeee",
    },
    {
        name: "Project 4",
        desc: "something about 4",
        image: "four.webp",
        color: "#ababab",
    },
];

const index = () => {
    // const [modal, setModal] = useState({ active: false, index: 0 });

    return (
        <div className={styles.gallery}>
            <h1>Projects</h1>
            <div className={styles.projects}>
                {Projects.map((project, index) => {
                    return (
                        <Project key={index} project={project} index={index} />
                    );
                })}
            </div>
        </div>
    );
};

export default index;
