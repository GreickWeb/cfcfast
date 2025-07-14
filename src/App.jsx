import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import Login from './pages/Login'
import Home from './pages/Home'
import Cadastro from "./pages/Cadastro"
import Instrutor from './pages/InstrutorHome'
import AgendaAluno from "./pages/AgendaAluno"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/instrutor" element={<Instrutor />} />
        <Route path="/aluno" element={<Home />} />
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/aluno/agenda" element={<AgendaAluno />} />
        <Route path="*" element={<h1>404 - Página não encontrada</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
