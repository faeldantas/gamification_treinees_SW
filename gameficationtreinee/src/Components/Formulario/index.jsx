import styles from "./styles.module.css"

export default function Formulario({children}){
    const aoSalvar = (evento)=>{
        evento.preventDefault()
    }

    return(
        <>
        <form action="" className={styles.formularioContainer} onSubmit={aoSalvar}>
            {children}
        </form>
        </>
    )
}