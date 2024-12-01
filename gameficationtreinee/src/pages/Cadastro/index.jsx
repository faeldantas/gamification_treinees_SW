import styles from "./styles.module.css"
import CampoTexto from "../../Components/CampoTexto";
import Formulario from "../../Components/Formulario";
import imgDarthVaderDark from "../../assets/darth-vader 2.png"
import Botao from "../../Components/Botao";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Cadastro(){
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    const dadosCdastro ={
        nome,
        email,
        senha
    }

    return(
        <section className={styles.cadastroContainer}>
            <Formulario prop={dadosCdastro}>
                <img src={imgDarthVaderDark} alt="" />
                <div>
                <CampoTexto label={"Nomo do Jedi"} icon={"usuario"} type={"text"} valor={setNome} />
                <CampoTexto label={"E-mail"} icon={"e-mail"} type={"email"}  valor={setEmail}/>
                <CampoTexto label={"Senha"} icon={"senha"} type={"password"} valor={setSenha}/>
                <div style={{padding:"10px 0 0 10px"}}>
                    <Link to={"/login"}>Fazer login</Link>
                </div>
                
                
                </div>
                <Botao>Enviar</Botao>
            </Formulario>
        </section>
    )
}