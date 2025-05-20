import React from 'react';
import './App.css';

// Image URL is now directly in CSS
// const parallaxImageUrl = '/bg.png'; 

function App() {
  const videoId = 'Bjx8b1o29io'; // Your YouTube video ID
  const videoSrc = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="App">
      {/* This div will have the full-screen background image via CSS */}
      <div className="hero-section-bg">
        {/* The App-hero-content styling will be adjusted in CSS if needed */}
        <div className="App-hero-content">
          <h1>Descubre el Poder de OSM</h1>
          <p className="App-subtitle">Transforma tus ventas con nuestra metodología probada.</p>
          
          <div className="video-container">
            <iframe
              width="560"
              height="315"
              src={videoSrc}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
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
        </div>
      </div>

      {/* The previously existing commented out main and footer can remain outside if they shouldn't have parallax */}
      <main>
        <section id="about-osm">
          <h2>¿Qué es OSM?</h2>
          <p>Una breve descripción de Outbound Sales Machine y sus beneficios.</p>
        </section>
        <section id="features">
          <h2>Características Principales</h2>
          <ul>
            <li>Característica 1</li>
            <li>Característica 2</li>
            <li>Característica 3</li>
          </ul>
        </section>
        <section id="testimonials">
          <h2>Testimonios</h2>
          <p>"OSM transformó nuestras ventas." - Cliente Satisfecho</p>
        </section>
      </main>
      <footer>
        <p> 2025 Tu Nombre/Empresa. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
