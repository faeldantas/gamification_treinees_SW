import styles from "./styles.module.css"

export default function Card({cor}) {
    return (
        <div className={styles.cardContainer} >
            <div className={styles.cardImgContainer} style={{ background: `var(--${cor})` }}>
                <div className={styles.containerEspada}>
                    <img src={`/image/espada${cor}.png`} alt="" />
                </div>
            </div>
            <div className={styles.cardDownContainer}>
                <div className={`${styles[cor]}`}>

                </div>
            </div>
        </div>
    )
}