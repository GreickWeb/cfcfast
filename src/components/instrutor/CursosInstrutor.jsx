import { motion } from 'framer-motion'
import { FaCarCrash, FaUserGraduate } from 'react-icons/fa'
import ButtonYellow from "../ButtonYellow"; 

export default function CursosInstrutor() {
  const cursos = [
    {
      titulo: 'Direção Defensiva',
      descricao: 'Atualizações sobre técnicas seguras de direção.',
      icone: <FaCarCrash size={40} color="#FFD700" />
    },
    {
      titulo: 'Psicologia no Trânsito',
      descricao: 'Entenda o comportamento dos alunos no volante.',
      icone: <FaUserGraduate size={40} color="#FFD700" />
    }
  ]

  return (
    <section id="cursos" className="cursos-section">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Cursos de Aperfeiçoamento
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Participe de formações e atualizações constantes para melhorar sua prática como instrutor.
      </motion.p>

      <div className="cursos-list">
        {cursos.map((curso, index) => (
          <motion.div
            className="curso-card"
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="icon">{curso.icone}</div>
            <h3>{curso.titulo}</h3>
            <p>{curso.descricao}</p>
            <ButtonYellow>Ver Curso</ButtonYellow>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
