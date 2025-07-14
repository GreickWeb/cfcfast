import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebookF, FaWhatsapp, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-col">
          <h2 className="footer-logo">FASTCFC</h2>
          <p>Transformando alunos em motoristas responsáveis, com dedicação, segurança e qualidade no ensino.</p>
        </div>

        <div className="footer-col">
          <h3>Links Rápidos</h3>
          <ul>
            <li><a href="#home">Inicio</a></li>
            <li><a href="#calendario">Calendário</a></li>
            <li><a href="#recomendacoes">Recomendações</a></li>
            <li><a href="#cursos">Aperfeiçoamento</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Contato</h3>
          <p><FaMapMarkerAlt /> Av. Portugal, 1234 – Centro, Caruaru/PE</p>
          <p><FaPhone /> (81) 99999-9999</p>
          <p><FaEnvelope /> contato@fastcfc.com.br</p>
        </div>

     <div className="footer-col">
          <h3>Redes Sociais</h3>
          <div className="social-icons">
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaWhatsapp /></a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} FASTCFC – Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
