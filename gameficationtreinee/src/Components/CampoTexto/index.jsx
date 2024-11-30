import styles from "./styles.module.css"

export default function CampoTexto({ label, icon,type }) {
    return (
        <>
            <div className={styles.campoTextoContainer}>
                <label htmlFor="" className={styles.campoLabel}>{label}</label>
                <div className={styles.containerInput}>
                    <img className={styles.imageIcon} src={`/image/${icon}.png`} alt="" />
                    <input type={type} className={styles.campoInput} onChange={(e)=>console.log(e.target.value)}/>
                </div>
            </div>

        </>
    )
}