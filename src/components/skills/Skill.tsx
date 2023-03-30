import { inter } from "@/libs/fonts";
import styles from "../../styles/skills/skill.module.scss";

type Props = {
    Icon: (props: any) => JSX.Element;
    title: string;
}

export default function Skill({ Icon, title }: Props) {
    return (
        <div className={styles["skill-wrapper"]}>
            <Icon className={styles.skill} />
            <div className={`${styles.title} ${inter.className}`}>
                {title}
            </div>
        </div>
    );
}