import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>OSM - Outbound Sales Machine</h1>
        <p>Agenda una llamada de descubrimiento para conocer cómo OSM puede ayudarte.</p>
        {/* Aquí irá el embed de Calendly u otra herramienta de agendamiento */}
        <div id="schedule-form-placeholder">
          <p>El formulario de agendamiento aparecerá aquí.</p>
          <button>Agendar Llamada (Ejemplo)</button>
        </div>
      </header>
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
        <p>© 2025 Tu Nombre/Empresa. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
