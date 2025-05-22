import React, { useState, useEffect } from 'react';
import './App.css';

// Image URL is now directly in CSS
// const parallaxImageUrl = '/bg.png'; 

function App() {
  const [currentReason, setCurrentReason] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  
  const words = ['Poder', 'Alcance', 'Precisión'];
  const reasons = [
    'No estás llegando a suficientes prospectos calificados',
    'Tus mensajes no están generando el interés suficiente',
    'No tienes un sistema automatizado para seguir con los leads',
    'Estás perdiendo oportunidades por falta de tiempo o recursos'
  ];
  
  // Efecto para la animación de escritura/borrado (versión refinada)
  useEffect(() => {
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const pauseBeforeDelete = 4000; // Usando el valor que ajustaste (4s)
    const pauseBetweenWords = 500;

    const currentWord = words[wordIndex % words.length];
    let timeoutId;

    if (isTyping) {
      // Estamos en fase de escritura
      if (text !== currentWord) {
        // Si el texto actual no es la palabra completa, seguir escribiendo
        timeoutId = setTimeout(() => {
          setText(prevText => currentWord.substring(0, prevText.length + 1));
        }, typingSpeed);
      } else {
        // Palabra completa, esperar antes de borrar
        timeoutId = setTimeout(() => {
          setIsTyping(false); // Cambiar a fase de borrado
        }, pauseBeforeDelete);
      }
    } else {
      // Estamos en fase de borrado
      if (text !== '') {
        // Si el texto no está vacío, seguir borrando
        timeoutId = setTimeout(() => {
          setText(prevText => prevText.substring(0, prevText.length - 1));
        }, deletingSpeed);
      } else {
        // Texto vacío, cambiar a la siguiente palabra y empezar a escribir
        timeoutId = setTimeout(() => {
          setIsTyping(true);
          setWordIndex(prevWordIndex => (prevWordIndex + 1) % words.length);
        }, pauseBetweenWords);
      }
    }

    return () => clearTimeout(timeoutId); // Limpieza del timeout
  }, [text, isTyping, wordIndex]); // 'words' removido de las dependencias
  
  useEffect(() => {
    let timeoutId;
    const interval = setInterval(() => {
      setIsTransitioning(true);
      
      // Esperar a que termine la animación de salida
      timeoutId = setTimeout(() => {
        setCurrentReason((prev) => (prev + 1) % reasons.length);
        setIsTransitioning(false);
      }, 500);
      
    }, 3000);
    
    return () => {
      clearInterval(interval);
      clearTimeout(timeoutId);
    };
  }, [reasons.length]);

  // useEffect para cargar el script de Calendly
  useEffect(() => {
    const scriptId = 'calendly-widget-script';
    // Evitar cargar el script múltiples veces si ya existe
    if (document.getElementById(scriptId)) {
      return;
    }

    const script = document.createElement('script');
    script.id = scriptId;
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;

    document.body.appendChild(script);

    // Limpieza opcional: remover el script si el componente se desmonta
    return () => {
      const existingScript = document.getElementById(scriptId);
      if (existingScript && existingScript.parentNode) {
        existingScript.parentNode.removeChild(existingScript);
      }
    };
  }, []); // El array vacío asegura que se ejecute solo una vez (al montar)

  const videoId = '59F70zfn5fo';
  const videoSrc = `https://www.youtube.com/embed/${videoId}?controls=0&showinfo=0&rel=0&modestbranding=1&autoplay=1`;
  const [showVideo, setShowVideo] = React.useState(false);
  const thumbnail = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  return (
    <div className="App">
      {/* This div will have the full-screen background image via CSS */}
      <div className="hero-section-bg">
        {/* The App-hero-content styling will be adjusted in CSS if needed */}
        <div className="App-hero-content">
          <img src="/OSM.png" alt="Logo OSM Outbound Sales Machine" className="osm-logo" />
          <h1>
  Descubre el <span className="typing-text">{text}</span>
  <span className="typing-cursor">|</span>de OSM
</h1>
          <p className="App-subtitle2">Un sistema diseñado para agencias y emprendedores que buscan escalar su negocio sin ads ni contenido diario</p>

          {/* Fake Player limpio */}
          <div className="video-container">
            {showVideo ? (
              <iframe
                src={videoSrc}
                title="Presentación OSM"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ borderRadius: '16px', background: '#fff' }}
              />
            ) : (
              <div className="video-thumbnail" onClick={() => setShowVideo(true)} style={{cursor:'pointer'}}>
                <div className="video-thumb-bg">
                  <img src={thumbnail} alt="Mira este video" style={{width:'100%', height:'100%', borderRadius:'16px', display:'block', objectFit:'cover'}} />
                  <button className="play-btn" aria-label="Ver video">
                    <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="36" cy="36" r="36" fill="#F3F3F3"/>
                      <polygon points="30,24 52,36 30,48" fill="#232323"/>
                    </svg>
                  </button>
                </div>
              </div>
            )}
          </div>
                    <button
  className="osm-pill-btn"
  onClick={() => window.open('https://calendly.com/osm-meet/meet-reconocimiento-osm-clon', '_blank')}
>
  <span className="btn-text">Agendar llamada</span>
  <span className="arrow-circle">
    <span className="arrow-icon">
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M6 4.5L12 9L6 13.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </span>
  </span>
</button>

          {/* Sección Esto es para vos si */}
          <div className="para-vos-si">
            <h2 className="section-title">Esto es para vos si:</h2>
            <ul className="checklist">
              <li>Querés más clientes pero no sabés como llenar tu agenda</li>
              <li>Estás cansado de desperdiciar dinero en auncios</li>
              <li>Sentís que tu servicio tiene potencial pero no sabés como escalarlo</li>
            </ul>
          </div>
        </div>
      </div>

      {/* The previously existing commented out main and footer can remain outside if they shouldn't have parallax */}
      <main>
        {/* Roadmap Section */}
        <section id="osm-roadmap">
          <h2 className="section-title">Cómo funciona OSM</h2>
          
          <div className="roadmap-container">            
            <div className="roadmap-steps">
              <div className="roadmap-step">
                <div className="step-number">01</div>
                <div className="step-content">
                  <h3>Ecosistema de Cuentas</h3>
                  <p>Creamos un ecosistema de cuentas "asistentes" de tu negocio</p>
                </div>
              </div>
              
              <div className="roadmap-step">
                <div className="step-number">02</div>
                <div className="step-content">
                  <h3>Filtramos clientes</h3>
                  <p>Filtramos los clientes potenciales con IA</p>
                </div>
              </div>
              
              <div className="roadmap-step">
                <div className="step-number">03</div>
                <div className="step-content">
                  <h3>Enviamos mensajes</h3>
                  <p>Enviamos 600 mensajes diarios a estos clientes</p>
                </div>
              </div>
              
              <div className="roadmap-step">
                <div className="step-number">04</div>
                <div className="step-content">
                  <h3>Calificamos y agendamos</h3>
                  <p>Nuestro sistema con IA filtra y califica los leads y los agenda en automático</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sección Por qué no estás agendando */}
        <section className="agendando-section">
          <div className="container">
            <h2 className="section-title">¿Por qué no estás agendando?</h2>
            <div className="agendando-content">
              <p className="agendando-text">
                Si estás intentando hacer crecer tu negocio pero no estás consiguiendo suficientes reuniones, probablemente sea porque:
              </p>
              
              <div className="rotating-reason">
          
                <div className="reason-text">
                  <p className={!isTransitioning ? 'reason-active' : 'reason-exit'}>
                    {reasons[currentReason]}
                  </p>
                  <p className={isTransitioning ? 'reason-enter' : 'reason-hidden'}>
                    {reasons[(currentReason + 1) % reasons.length]}
                  </p>
                </div>
              </div>
              
            
            </div>
          </div>
        </section>
        
        <button
  className="osm-pill-btn"
  onClick={() => window.open('https://calendly.com/osm-meet/meet-reconocimiento-osm-clon', '_blank')}
>

  
  <span className="btn-text">Agendar llamada</span>
  <span className="arrow-circle">
    <span className="arrow-icon">
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M6 4.5L12 9L6 13.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </span>
  </span>
</button>
      </main>
      {/* Principio del widget integrado de Calendly */}
      <div 
        className="calendly-inline-widget" 
        data-url="https://calendly.com/osm-meet/meet-reconocimiento-osm-clon?hide_gdpr_banner=1&background_color=1a1a1a&text_color=ffffff&primary_color=ed5062" 
        style={{ minWidth: '320px', height: '700px' }}
      ></div>
      {/* Final del widget integrado de Calendly */}
      <footer className="footer">
        <p> 2025 Ainnovate Agency. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
