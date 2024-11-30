import Botao from "../../Components/Botao";
import CampoTexto from "../../Components/CampoTexto";
import Formulario from "../../Components/Formulario";
import Titulo from "../../Components/Titulo";
import stormTrooper from "../../assets/Free-Star-Wars-Trooper-Helmet-Vector-e1444605852818 3.png"
import styles from "./styles.module.css"


export default function Login(){
    return(
        <section className={styles.loginContainer}> 

            <Formulario>
            <img src={stormTrooper} alt="" />
            <Titulo>
                Login
            </Titulo>
                <CampoTexto icon={"e-mail"} label={"E-mail"}/>
                <CampoTexto icon={"senha"} label={"Senha"}/>
                <Botao>
                    Enviar
                </Botao>
            </Formulario>
        </section>
    )
}