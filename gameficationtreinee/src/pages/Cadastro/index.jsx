import styles from "./styles.module.css"
import CampoTexto from "../../Components/CampoTexto";
import Formulario from "../../Components/Formulario";
import imgDarthVaderDark from "../../assets/darth-vader 2.png"
import Botao from "../../Components/Botao";

export default function Cadastro(){
    return(
        <section className={styles.cadastroContainer}>
            <Formulario>
                <img src={imgDarthVaderDark} alt="" />
                <CampoTexto label={"Nomo do Jedi"} icon={"usuario"} type={"text"}/>
                <CampoTexto label={"E-mail"} icon={"e-mail"} type={"email"}/>
                <CampoTexto label={"Senha"} icon={"senha"} type={"password"}/>
                <Botao>Enviar</Botao>
            </Formulario>
        </section>
    )
}