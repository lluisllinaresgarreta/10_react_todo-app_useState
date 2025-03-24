import styles from "./Subheader.module.css";

export function Subheader({ subtitle}) {
    
    return <h2 className={styles["subheader"]}>{subtitle}</h2>;
};
