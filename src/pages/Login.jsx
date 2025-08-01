import ButtonYellow from '../components/ButtonYellow'
import ButtonTransparent from '../components/buttonTransparent'
import InputPrimary from '../components/InputPrimary'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'


function Login() {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [indexAtual, setIndexAtual] = useState(0)

  const imagens = [
    { src: 'src/assets/imgF.jpg', alt: 'Banner 1' },
    { src: 'src/assets/imgF2.jpg', alt: 'Banner 2' },
    { src: 'src/assets/car1.jpeg', alt: 'Banner 3' }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setIndexAtual((prevIndex) => (prevIndex + 1) % imagens.length)
    }, 7000)
    return () => clearInterval(interval)
  }, [])

  const handleLogin = (e) => {
    e.preventDefault()
    alert(`Login com: ${email} / ${senha}`)
  }

  const handleCadastroClick = () => {

    alert('Indo para o cadastro...')
  }

  return (
    <section className="loginPage">
      <div className="loginDir">
        <div className="loginTop">
          <h1>FAÇA LOGIN</h1>
          <Link to="/Cadastro">
            <h4>Esqueceu seu acesso?</h4>
          </Link>
        </div>
        <form onSubmit={handleLogin}>
          <InputPrimary
            placeholder="Digite seu Email"
            type="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputPrimary
            placeholder="Digite sua Senha"
            type="password"
            value={senha}
            required
            onChange={(e) => setSenha(e.target.value)}
          />
          <Link to="/aluno"><ButtonYellow type="submit">ENTRAR</ButtonYellow></Link>
        </form>
        <div className="sociais">
          <div><h1>Conheça nossas redes sociais:</h1></div>
          <div className="logosSoc">
<ul class="example-1">
  <li class="icon-content">
    <a
      href="https://www.spotify.com/"
      aria-label="Spotify"
      data-social="spotify"
      class="link"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
        <path
          d="M29.059 15.085C29.058 7.322 22.764 1.028 15 1.028S0.941 7.323 0.941 15.087c0 6.989 5.1 12.787 11.781 13.875l0.081 0.011V19.15H9.232v-4.065h3.57v-3.096a4.962 4.962 0 0 1 5.329 -5.469l-0.017 -0.001c1.124 0.016 2.212 0.115 3.273 0.292l-0.126 -0.018v3.459h-1.774a2.033 2.033 0 0 0 -2.291 2.204l-0.001 -0.008v2.636h3.899l-0.623 4.065h-3.276v9.823c6.762 -1.101 11.862 -6.899 11.863 -13.888"
          fill="currentColor"
        ></path>
      </svg>
    </a>
    <div class="tooltip">Facebook</div>
  </li>
  <li class="icon-content">
    <a
      href="https://www.pinterest.com/"
      aria-label="Pinterest"
      data-social="pinterest"
      class="link"
    >
      <svg version="1.1" viewBox="0 0 100 100" xml:space="preserve">
        <path
          d="M60 45a15 15 0 1 0 -4.395 10.61A14.4 14.4 0 0 0 60 45.225l-0.004 -0.237zm8.1 0a23.006 23.006 0 1 1 -6.738 -16.347 22.2 22.2 0 0 1 6.742 15.96l-0.004 0.41v-0.02zm6.327 -24.022v0.008a5.4 5.4 0 1 1 -1.582 -3.818 5.177 5.177 0 0 1 1.556 3.705v0.11zm-29.4 -12.9 -4.482 -0.03q-4.072 -0.03 -6.184 0t-5.655 0.176a47.143 47.143 0 0 0 -6.312 0.638l0.273 -0.038a23.571 23.571 0 0 0 -4.362 1.136l0.16 -0.052a15.446 15.446 0 0 0 -8.52 8.452l-0.038 0.102a22.543 22.543 0 0 0 -1.065 4.062l-0.02 0.138a45 45 0 0 0 -0.597 5.96l-0.004 0.08q-0.147 3.548 -0.176 5.655t0 6.184 0.03 4.482 -0.03 4.482 0 6.184 0.176 5.655c0.075 2.193 0.292 4.275 0.638 6.312l-0.038 -0.273a23.571 23.571 0 0 0 1.136 4.362l-0.052 -0.16a15.446 15.446 0 0 0 8.452 8.52l0.102 0.038c1.192 0.446 2.606 0.82 4.062 1.065l0.138 0.02c1.758 0.308 3.84 0.525 5.955 0.597l0.08 0.004q3.548 0.147 5.655 0.176t6.184 0l4.455 -0.09 4.482 0.03q4.072 0.03 6.184 0t5.655 -0.176a47.143 47.143 0 0 0 6.312 -0.638l-0.273 0.038a23.571 23.571 0 0 0 4.362 -1.136l-0.16 0.052a15.446 15.446 0 0 0 8.52 -8.452l0.038 -0.102c0.446 -1.192 0.82 -2.606 1.065 -4.062l0.02 -0.138c0.308 -1.758 0.525 -3.84 0.597 -5.955l0.004 -0.08q0.147 -3.548 0.176 -5.655t0 -6.184 -0.03 -4.482 0.03 -4.482 0 -6.184 -0.176 -5.655a47.143 47.143 0 0 0 -0.638 -6.312l0.038 0.273a23.743 23.743 0 0 0 -1.136 -4.362l0.052 0.16a15.446 15.446 0 0 0 -8.452 -8.52l-0.102 -0.038a22.543 22.543 0 0 0 -4.062 -1.065l-0.138 -0.02a45 45 0 0 0 -5.955 -0.597l-0.08 -0.004q-3.548 -0.147 -5.655 -0.176t-6.184 0zM90 45q0 13.418 -0.3 18.574a24.9 24.9 0 0 1 -26.194 26.13l0.06 0.004q-5.157 0.3 -18.574 0.3t-18.574 -0.3A24.9 24.9 0 0 1 0.286 63.514l-0.004 0.06q-0.3 -5.157 -0.3 -18.574t0.3 -18.574A24.9 24.9 0 0 1 26.478 0.297l-0.058 -0.005q5.157 -0.3 18.574 -0.3t18.574 0.3a24.9 24.9 0 0 1 26.13 26.194l0.004 -0.06Q90 31.578 90 45"
          fill="currentColor"
        ></path>
      </svg>
    </a>
    <div class="tooltip">Instagram</div>
  </li>
  <li class="icon-content">
    <a
      href="https://dribbble.com/"
      aria-label="Dribbble"
      data-social="dribbble"
      class="link"
    >
      <svg version="1.1" viewBox="0 0 100 100">
        <path
          d="M53.564 38.947 87.066 0h-7.941L50.033 33.816 26.801 0H0l35.136 51.137L0 91.977h7.941l30.722 -35.712 24.54 35.712H90L53.561 38.947zM42.686 51.588l-3.56 -5.093L10.8 5.977h12.194l22.86 32.699 3.56 5.093 29.714 42.503H66.935L42.686 51.591z"
          fill="currentColor"
        ></path>
      </svg>
    </a>
    <div class="tooltip">Twitter</div>
  </li>
  <li class="icon-content">
    <a
      href="https://telegram.org/"
      aria-label="Telegram"
      data-social="telegram"
      class="link"
    >
      <svg version="1.1" viewBox="0 0 100 100">
        <path
          d="M20 80A12 12 0 0 1 8 68v-40A12 12 0 0 1 20 16h56A12 12 0 0 1 88 28v40A12 12 0 0 1 76 80zm10.5 -47.12a4 4 0 1 0 -5.001 6.24l15.001 12.004a12 12 0 0 0 15.001 0l15.001 -12a4 4 0 1 0 -5.001 -6.247l-15.001 12a4 4 0 0 1 -5.001 0z"
          fill="currentColor"
        ></path>
      </svg>
    </a>
    <div class="tooltip">email</div>
  </li>
</ul>

          </div>
        </div>
      </div>

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
    </section>
  )
}

export default Login
