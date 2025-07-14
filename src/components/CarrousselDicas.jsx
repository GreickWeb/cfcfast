import { useEffect, useRef } from 'react'

const dicas = [
  {
    titulo: 'Dica 1',
    video: 'https://www.youtube.com/embed/-kIzHPSecmg?si=Nc2qokvw1UKD3i29',
    texto: 'Aprenda sobre direção defensiva e como ela pode salvar vidas.'
  },
  {
    titulo: 'Dica 2',
    video: 'https://www.youtube.com/embed/6DTZqVq3xC8?si=PJ5Zw72yYS7P98kC',
    texto: 'Entenda o controle do freio e da embreagem no dia a dia.'
  },
  {
    titulo: 'Dica 3',
    video: 'https://www.youtube.com/embed/j8WYQBCxROE?si=FInvuwySBEm5I7IP',
    texto: 'Mais uma dica importante sobre o uso dos pedais.'
  }
] 

export default function CarrousselDicas() {
  const containerRef = useRef(null)

  // Auto-scroll
  useEffect(() => {
    const interval = setInterval(() => {
      const container = containerRef.current
      if (!container) return

      const scrollAmount = container.offsetWidth
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' })

      if (container.scrollLeft + scrollAmount >= container.scrollWidth) {
        setTimeout(() => {
          container.scrollTo({ left: 0, behavior: 'smooth' })
        }, 1000)
      }
    }, 8000)

    return () => clearInterval(interval)
  }, [])

  const scrollLeft = () => {
    containerRef.current.scrollBy({ left: -containerRef.current.offsetWidth, behavior: 'smooth' })
  }

  const scrollRight = () => {
    containerRef.current.scrollBy({ left: containerRef.current.offsetWidth, behavior: 'smooth' })
  }

  return (
    <section id='dicasSect' className="dicas-section">
      <h2>DICAS DE DIREÇÃO</h2>
      <div className="carrousel-wrapper">
        <button className="nav-button left" onClick={scrollLeft}>‹</button>

        <div className="carrousel-scroll" ref={containerRef}>
          {dicas.map((dica, index) => (
            <div className="carrousel-card" key={index}>
              <h3>{dica.titulo}</h3>
              <iframe
                width="100%"
                height="300"
                src={dica.video}
                title={`Video ${index}`}
                allowFullScreen
              ></iframe>
              <p>{dica.texto}</p>
            </div>
          ))}
        </div>

        <button className="nav-button right" onClick={scrollRight}>›</button>
      </div>
    </section>
  )
}
