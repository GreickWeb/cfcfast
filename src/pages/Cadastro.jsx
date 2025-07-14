import ButtonYellow from '../components/ButtonYellow'
import ButtonTransparent from '../components/buttonTransparent'
import InputPrimary from '../components/InputPrimary'
import {Link} from 'react-router-dom'
import { useState, useEffect } from 'react';

const imagens = [
  { src: 'src/assets/imgF.jpg', alt: 'Banner 1' },
  { src: 'src/assets/imgF2.jpg', alt: 'Banner 2' },
  { src: 'src/assets/car1.jpeg', alt: 'Banner 3' }
]
function Cadastro() {
  const handleClick = () => {
    alert('Indo para Login...')
  }
    const [indexAtual, setIndexAtual] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndexAtual((prevIndex) => (prevIndex + 1) % imagens.length)
    }, 7000)
    return () => clearInterval(interval)
  }, [])

  return (
  <>
  <section className='loginPage'>
        <div className="loginEsq">
          {imagens.map((img, i) => (
            <img
              key={i}
              src={img.src}
              alt={img.alt}
              className={`slide ${i === indexAtual ? 'ativo' : ''}`}
            />
          ))}
        <div className="dots">
  {imagens.map((_, i) => (
    <span key={i} className={`dot ${i === indexAtual ? 'active' : ''}`}></span>
  ))}
</div>

    </div>
    <div className='loginDir'>
      <div className="loginTop">
        <h1>CADASTRO DE ALUNOS</h1>
        <Link to="/Login"><h4>Ou faça já seu login</h4></Link>
      </div>
  <form action="/db" method="post">
  
 <div className='spaceInputs'>
  
  <InputPrimary placeholder="Digite seu Nome" type="text"></InputPrimary>
  <InputPrimary placeholder="Digite seu Sobrenome" type="text"></InputPrimary>
  
  </div>  
  <div className="spaceInputs">
  <InputPrimary placeholder="Digite seu CPF" type="text"></InputPrimary>
  <InputPrimary placeholder="Digite sua Data de Nascimento" type="date"></InputPrimary>
  </div>
  <InputPrimary placeholder="Digite seu Telefone" type="tel"></InputPrimary>
<div className="mydict">
  <div>
    <label>
      <input type="radio" name="radio" value="Feminino"  />
      <span>Feminino</span>
    </label>
    <label>
      <input type="radio" name="radio" value="Masculino" />
      <span>Masculino</span>
    </label>
    <label>
      <input type="radio" name="radio" value="Outros" />
      <span>Outros</span>
    </label>
  </div>
</div>
  <InputPrimary placeholder="Digite seu Email" type="email"></InputPrimary>
  <InputPrimary placeholder="Digite sua Senha" type="password"></InputPrimary>
  <a href="">Esqueceu sua senha?</a>

  <Link to="/"><ButtonYellow onClick={handleClick}>Criar Conta</ButtonYellow></Link>
  </form>
    </div>
  </section>
  
  </>
  )
}


export default Cadastro
