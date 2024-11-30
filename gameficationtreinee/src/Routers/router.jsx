import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cadastro from "../pages/Cadastro";
import Login from "../pages/Login";
import EscolhaTimes from "../pages/EscolhaTime";

export default function AppRotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Cadastro />} />
                <Route path="/login" element={<Login />} />
                <Route path="/EscolhaDeTimes" element={<EscolhaTimes />} />
            </Routes>
        </BrowserRouter>
    )
}