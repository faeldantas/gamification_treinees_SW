import styles from "./styles.module.css"

export default function Titulo({children}){
    return(
        <h1 className={styles.titulo}>{children}</h1>
    )
}