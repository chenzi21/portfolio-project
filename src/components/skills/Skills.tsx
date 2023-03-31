import ReactLogo from "../../files/icons/react";
import Graphql from "../../files/icons/GraphQL";
import NextJS from "../../files/icons/nextjs";
import Database from "../../files/icons/database";
import Github from "../../files/icons/github";
import Typescript from "../../files/icons/typescript";
import Javascript from "../../files/icons/javascript";
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