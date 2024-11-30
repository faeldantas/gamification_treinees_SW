import styles from "./styles.module.css"

export default function Botao({children}){
    return(
        <button className={styles.botaoContainer}>
            {children}
        </button>
    )
}