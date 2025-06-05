import ButtonYellow from '../components/ButtonYellow'
import ButtonTransparent from '../components/buttonTransparent'
import InputPrimary from '../components/InputPrimary'
import {Link} from 'react-router-dom'

function Login() {
  const handleClick = () => {
    alert('Você clicou!')
  }

 
  return (
  <>
  <section className='loginPage'>
        <div className='loginEsq'>
            <div className='boxTextLog'>
              <h1>AINDA NÃO TEM CONTA?</h1>
                <Link to="/Cadastro"><ButtonTransparent onClick={handleClick}>FAÇA JÁ SEU LOGIN</ButtonTransparent></Link>
            </div>
    </div>
    <div className='loginDir'>
  <h1>FAÇA LOGIN</h1>
  <form action="/db" method="post">
  
  <InputPrimary placeholder="Digite seu Email" type="email"></InputPrimary>
  <InputPrimary placeholder="Digite sua Senha" type="password"></InputPrimary>
  <a href="">Esqueceu sua senha?</a>

  <Link to="/"><ButtonYellow onClick={handleClick}>ENTRAR</ButtonYellow></Link>
  </form>
    </div>
  </section>
  
  </>
  )
}


export default Login
