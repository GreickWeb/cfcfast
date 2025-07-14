// AgendaAluno.jsx
import { useState, useEffect } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import ptBr from '@fullcalendar/core/locales/pt-br'
import { motion } from 'framer-motion'
import ButtonYellow from '../components/ButtonYellow'
import { FaWhatsapp, FaPhoneAlt, FaEnvelope, FaExternalLinkAlt } from 'react-icons/fa'
import timeGridPlugin from '@fullcalendar/timegrid'
import { Link } from 'react-router-dom'

export default function AgendaAluno() {
  const [motivo, setMotivo] = useState('')
  const [data, setData] = useState('')
  const [eventos, setEventos] = useState([
    {
                title: 'Aula de carro - Eric', start: '2025-07-14T10:00:00', end: '2025-07-14T12:00:00' },
              { title: 'Aula de carro - Eric', start: '2025-07-15T10:00:00', end: '2025-07-15T12:00:00'},
              { title: 'Aula de carro - Eric', start: '2025-07-16T10:00:00', end: '2025-07-16T12:00:00' },
              { title: 'Aula de carro - Eric', start: '2025-07-18T10:00:00', end: '2025-07-18T12:00:00' },
              { title: 'Aula de carro - Eric', start: '2025-07-20T10:00:00', end: '2025-07-20T12:00:00' },
              { title: 'Aula de carro - Eric', start: '2025-07-22T10:00:00', end: '2025-07-22T12:00:00' },
              { title: 'Aula de carro - Eric', start: '2025-07-25T10:00:00', end: '2025-07-25T12:00:00' },
              { title: 'Aula de carro - Eric', start: '2025-07-27T10:00:00', end: '2025-07-27T12:00:00' },
              { title: 'Aula de carro - Eric', start: '2025-07-30T10:00:00', end: '2025-07-30T12:00:00' },
              { title: 'Aula de carro - Eric', start: '2025-08-14T10:00:00', end: '2025-08-14T12:00:00' }
  ])

  const handleDateClick = (info) => {
    const novaData = info.dateStr
    setData(novaData)
    alert(`Solicitar alteração para o dia ${novaData}`)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!data || !motivo) {
      alert('Preencha todos os campos')
      return
    }
    alert(`Solicitação enviada para adiar aula no dia ${data} com motivo: ${motivo}`)
    setData('')
    setMotivo('')
  }

  const Contatos = [
    {
      nome: 'Lázaro Gabriel',
      especialidade: 'Aula prática - Carro',
      telefone: '(81) 98899-9999',
      email: 'lazaro@fastcfc.com.br',
    },
    {
      nome: 'Pedro Souza',
      especialidade: 'Aula Prática - Moto',
      telefone: '(81) 99899-9999',
      email: 'pedro.souza@fastcfc.com.br',
    }
    ,{
      nome: 'Ana Clara',
      especialidade: 'Secretaria - Auto Escola',
      telefone: '(81) 99777-7777',
      email: 'ana@fastcfc.com.br',
    }
  ]

  return (
        <>  
        <header className="header">
        <nav>
          <ul className="nav-links">
            <li><Link to="/aluno">Home</Link></li>
            <li><a href="/aluno">Feedback</a></li>
            <li><a href="/aluno">Dicas</a></li>
            <li><a href="#contato">Contatos</a></li>
            <li><a href="#contato">Detran</a></li>
          </ul>
        </nav>
      </header>
    <main className="agendaAluno-page">
      
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
      <section className="adiar-aula-section">
        <motion.div
          className="adiar-container"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          >
          <h2>Solicitar Adiamento de Aula</h2>
          <form className="form-adiar" onSubmit={handleSubmit}>
            <input
              type="date"
              value={data}
              onChange={(e) => setData(e.target.value)}
              placeholder="Data da Aula"
              required
              />
            <textarea
              value={motivo}
              onChange={(e) => setMotivo(e.target.value)}
              placeholder="Motivo do adiamento"
              required
              />
            <ButtonYellow type="submit">Enviar Solicitação</ButtonYellow>
          </form>
        </motion.div>
      </section>

      <section id="contato" className="instrutores-section">
        <h2>Contato dos Instrutores</h2>
        <div className="instrutores-grid">
          {Contatos.map((inst, index) => (
            <motion.div
            className="instrutor-card"
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            >
              <h3>{inst.nome}</h3>
              <p><strong>Especialidade:</strong> {inst.especialidade}</p>
              <p><FaPhoneAlt /> {inst.telefone}</p>
              <p><FaEnvelope /> {inst.email}</p>
              <a href={`https://wa.me/55${inst.telefone.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer">
                <FaWhatsapp /> Enviar Mensagem
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="detran-section">
        <motion.div
          className="detran-container"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          >
          <h2>Verificar Provas no DETRAN</h2>
          <p>Acesse o site oficial para datas e locais de prova.</p>
          <a
            href="https://www.detran.pe.gov.br/"
            target="_blank"
            rel="noopener noreferrer"
            className="detran-link"
            >
            Acessar DETRAN <FaExternalLinkAlt />
          </a>
        </motion.div>
      </section>
    </main>
            </>
  )
}
