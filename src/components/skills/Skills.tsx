import ReactLogo from "../../icons/react";
import Graphql from "../../icons/GraphQL";
import NextJS from "../../icons/nextjs";
import Database from "../../icons/database";
import Github from "../../icons/github";
import Typescript from "../../icons/typescript";
import Javascript from "../../icons/javascript";
import styles from "../../styles/skills/skills.module.scss"
import Skill from "./Skill";
import { useMemo } from "react";

const icons = [
    { Icon: Typescript, key: "Typescript" },
    { Icon: NextJS, key: "NextJS" },
    { Icon: Graphql, key: "GraphQL" },
    { Icon: Database, key: "SQLite" },
    { Icon: Github, key: "Github" },
    { Icon: ReactLogo, key: "React" },
    { Icon: Javascript, key: "Javascript" }
];

export default function Skills() {
    const IconsHTML = useMemo(() => icons.map(({ Icon, key }) => <Skill Icon={Icon} key={key} title={key} />), []);

    return (<div className={styles["skills-container"]}>
        {IconsHTML}
    </div>)
}