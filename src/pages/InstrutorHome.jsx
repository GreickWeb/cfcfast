import { Link } from 'react-router-dom';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import ptBr from '@fullcalendar/core/locales/pt-br';
import ButtonYellow from '../components/ButtonYellow';
import { FaOilCan, FaLightbulb, FaCarCrash, FaGasPump } from 'react-icons/fa'
import Cursos from '../components/instrutor/CursosInstrutor.jsx';
import Footer from '../components/Footer';
import AboutUs from '../components/AboutUs';

function InstrutorHome() {
  return (
    <>
      <header className="header">
        <nav>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><a href="#calendario">Calendário</a></li>
            <li><a href="#recomendacoes">Recomendações</a></li>
            <li><a href="#cursos">Aperfeiçoamento</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </nav>
      </header>

      <section className="perfil-section">
        <div className="perfil-container">
          <img src="src\assets\instrutorFoto.jpeg" alt="Foto do Instrutor" className="perfil-foto" />
          <div className="perfil-info">
            <h1>Bem-vindo, Instrutor!</h1>
            <p>Acesse suas informações pessoais, acompanhe aulas e ofereça feedback aos alunos.</p>
            <Link to="/perfil"><ButtonYellow>Acessar Perfil</ButtonYellow></Link>
          </div>
        </div>
      </section>

      {/* Calendário de Aulas */}
      <section id="calendario" className="calendar-section">
        <div className="calendar-container">
          <h2>Calendário de Aulas</h2>
          <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
            initialView="dayGridMonth"
            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay'
            }}
            editable={true}
            selectable={true}
            
            locale={ptBr}
            events={[
              { title: 'Aula de carro - Eric', start: '2025-07-14T10:00:00', end: '2025-07-14T12:00:00' },
              { title: 'Aula de carro - Eric', start: '2025-07-15T10:00:00', end: '2025-07-15T12:00:00'},
              { title: 'Aula de carro - Eric', start: '2025-07-16T10:00:00', end: '2025-07-16T12:00:00' },
              { title: 'Aula de carro - Eric', start: '2025-07-18T10:00:00', end: '2025-07-18T12:00:00' },
              { title: 'Aula de carro - Eric', start: '2025-07-20T10:00:00', end: '2025-07-20T12:00:00' },
              { title: 'Aula de carro - Eric', start: '2025-07-22T10:00:00', end: '2025-07-22T12:00:00' },
              { title: 'Aula de carro - Eric', start: '2025-07-25T10:00:00', end: '2025-07-25T12:00:00' },
              { title: 'Aula de carro - Eric', start: '2025-07-27T10:00:00', end: '2025-07-27T12:00:00' },
              { title: 'Aula de carro - Eric', start: '2025-07-30T10:00:00', end: '2025-07-30T12:00:00' },
              { title: 'Aula de carro - Eric', start: '2025-08-14T10:00:00', end: '2025-08-14T12:00:00' }
            ]}
            eventClick={(info) => {
              alert(`Evento: ${info.event.title}\nInício: ${info.event.start.toISOString()}\nFim: ${info.event.end ? info.event.end.toISOString() : 'Não definido'}`);
            }}
            dateClick={(info) => {
              alert(`Data clicada: ${info.dateStr}`);
            }}
            height="600px"
            firstDay={1}
            buttonText={{
              today: 'Hoje',
              month: 'Mês',
              week: 'Semana',
              day: 'Dia'
            }}
            eventTimeFormat={{ hour: '2-digit', minute: '2-digit', hour12: false }}
            eventDisplay="block"
          />
        </div>
      </section>

      {/* Recomendações sobre Veículo */}
      <section id="recomendacoes" className="recomendacoes-section">
        <h2 className="titulo-rec">Recomendações para o Veículo</h2>
        <p className="subtitulo-rec">Checklist rápido antes das aulas práticas:</p>

        <div className="recomendacoes-grid">
          <div className="cardRec">
            <FaOilCan className="iconRec" />
            <p>Verifique o nível do óleo e da água.</p>
          </div>
          <div className="cardRec">
            <FaLightbulb className="iconRec" />
            <p>Cheque faróis, buzina e setas.</p>
          </div>
          <div className="cardRec">
            <FaCarCrash className="iconRec" />
            <p>Certifique-se de que os pneus estão calibrados e os freios funcionando.</p>
          </div>
          <div className="cardRec">
            <FaGasPump className="iconRec" />
            <p>Garanta que o carro esteja limpo e com combustível.</p>
          </div>
        </div>
      </section>

      <Cursos />
      <AboutUs />
      <Footer />
    </>
  );
}

export default InstrutorHome;