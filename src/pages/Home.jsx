import { Link } from 'react-router-dom'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import timeGridPlugin from '@fullcalendar/timegrid'
import ptBr from '@fullcalendar/core/locales/pt-br'
import ButtonYellow from '../components/ButtonYellow'
import CarrouselDicas from '../components/CarrousselDicas'
import Footer from '../components/Footer'
import AboutUs from '../components/AboutUs'

function Home() {
  
  return (
    <>
      <header>
        <nav>
          <ul className='nav-links'>
            <li><a href="#home">Início</a></li>
            <li><Link to="/aluno/agenda">Agenda</Link></li>
            <li><a href="#feedback">Feedback</a></li>
            <li><a href="#dicasSect">Dicas</a></li>
            <li><a href="#about">Sobre nós</a></li>
          </ul>
        </nav>
      </header>
      <section id='home' className='calendar-section'>
        <div className='wellcome'>
          <h2>Bem-vindo ao nosso site!</h2>
          <p>Acompanhe aqui suas futuras aulas.</p>
        </div>
          <Link to="/aluno/agenda">
        <div className='calendar-container'>
          <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
            initialView="dayGridMonth"
            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay'
            }}
            editable={true}
            dayHeaderFormat={{ weekday: 'short' }}
            selectable={true}
            events={[
              { title: 'Aula de carro 1', start: '2025-07-14T10:00:00', end: '2025-07-14T12:00:00' },
              { title: 'Aula de carro 2', start: '2025-07-15T10:00:00', end: '2025-07-15T12:00:00'},
              { title: 'Aula de carro 3', start: '2025-07-16T10:00:00', end: '2025-07-16T12:00:00' },
              { title: 'Aula de carro 4', start: '2025-07-18T10:00:00', end: '2025-07-18T12:00:00' },
              { title: 'Aula de carro 5', start: '2025-07-20T10:00:00', end: '2025-07-20T12:00:00' },
              { title: 'Aula de carro 6', start: '2025-07-22T10:00:00', end: '2025-07-22T12:00:00' },
              { title: 'Aula de carro 7', start: '2025-07-25T10:00:00', end: '2025-07-25T12:00:00' },
              { title: 'Aula de carro 8', start: '2025-07-27T10:00:00', end: '2025-07-27T12:00:00' },
              { title: 'Aula de carro 9', start: '2025-07-30T10:00:00', end: '2025-07-30T12:00:00' },
              { title: 'Aula de carro 10', start: '2025-08-14T10:00:00', end: '2025-08-14T12:00:00' }
            ]}
            eventClick={(info) => {
              alert(`Evento: ${info.event.title}\nInício: ${info.event.start.toISOString()}\nFim: ${info.event.end ? info.event.end.toISOString() : 'Não definido'}`);
            }}
            dateClick={(info) => {
              alert(`Data clicada: ${info.dateStr}`);
            }}
            height="600px"
            firstDay={1} // Começa a semana na segunda-feira
            weekends={true} // Exibe os finais de semana
            slotDuration="01:00:00" // Duração de cada slot de tempo
            slotLabelFormat={{ hour: '2-digit', minute: '2-digit', hour12: false }} // Formato do rótulo do slot
            allDaySlot={true} // Exibe o slot de dia inteiro
            nowIndicator={true} // Indica o horário atual
            scrollTime="08:00:00" // Hora inicial do dia visível
            locale={ptBr}
            // Define o idioma para português do Brasil
            buttonText={{
              today: 'Hoje',
              month: 'Mês',
              week: 'Semana',
              day: 'Dia'
            }} // Texto dos botões de navegação
            views={{
              dayGridMonth: {
                titleFormat: { year: 'numeric', month: 'long' } // Formato do título do mês
              },
              timeGridWeek: {
                titleFormat: { year: 'numeric', month: 'long', day: 'numeric' } // Formato do título da semana
              },
              timeGridDay: {
                titleFormat: { year: 'numeric', month: 'long', day: 'numeric' } // Formato do título do dia
              }

            }}
            // Texto dos botões
            eventDisplay="block" // Exibe os eventos como blocos
            eventTimeFormat={{
              hour: '2-digit',
              minute: '2-digit',
              hour12: false

            }} // Formato do horário dos eventos

          />

        </div>
          </Link>
      </section>
      <section id='feedback' className='fdbackSec' >
        <div className='feedback-section'>
          <h1 className='feedTitle'>SEUS FEEDBACKS</h1>
          <div className="gridFeed">

            <div className='cardFeed'>
              <div className="topCard">
                <div className="leftCard">
                  <img src="src\assets\perfil.svg" alt="IMGUSER " />
                </div>
                <div className="rightCard">
                  <h4>Lázaro Gabriel</h4>
                  <h5>Instrutor</h5>
                </div>
              </div>
              <p>Parabéns! você conseguiu concluir o aprendizado do sistema de freio do carro!</p>
            </div>
            <div className='cardFeed'>
              <div className="topCard">
                <div className="leftCard">
                  <img src="src\assets\perfil.svg" alt="IMGUSER " />
                </div>
                <div className="rightCard">
                  <h4>Lázaro Gabriel</h4>
                  <h5>Instrutor</h5>
                </div>
              </div>
              <p>Parabéns! você conseguiu concluir o aprendizado do sistema de freio do carro!</p>
            </div>
            <div className='cardFeed'>
              <div className="topCard">
                <div className="leftCard">
                  <img src="src\assets\perfil.svg" alt="IMGUSER " />
                </div>
                <div className="rightCard">
                  <h4>Lázaro Gabriel</h4>
                  <h5>Instrutor</h5>
                </div>
              </div>
              <p>Parabéns! você conseguiu concluir o aprendizado do sistema de freio do carro!</p>
            </div>
            <div className='cardFeed'>
              <div className="topCard">
                <div className="leftCard">
                  <img src="src\assets\perfil.svg" alt="IMGUSER " />
                </div>
                <div className="rightCard">
                  <h4>Lázaro Gabriel</h4>
                  <h5>Instrutor</h5>
                </div>
              </div>
              <p>Parabéns! você conseguiu concluir o aprendizado do sistema de freio do carro!</p>
            </div>


          </div>
          <h1 className='feedTitle'>DEIXE TAMBÉM SEU FEEDBACK SOBRE A NOSSA ESCOLA:</h1>
          <form action="" className='formFeed'>
            <textarea className='inputFeed' placeholder='Digite aqui seu feedback...'></textarea>
            <ButtonYellow >ENVIAR</ButtonYellow>

          </form>
        </div>


      </section>
      <CarrouselDicas />
      <AboutUs />
      
      <Footer />
    </>
  )
}
export default Home
