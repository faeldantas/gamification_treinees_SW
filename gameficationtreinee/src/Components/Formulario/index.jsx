import styles from "./styles.module.css"

export default function Formulario({ children, prop}){
    const aoSalvar = (evento)=>{
        evento.preventDefault()

        fetch("http://localhost:3000/Usuarios",{
            method:"POST",
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(prop)
        })

        
    }

    return(
        <>
        <form action="" className={styles.formularioContainer} onSubmit={aoSalvar}>
            {children}
        </form>
        </>
    )
}