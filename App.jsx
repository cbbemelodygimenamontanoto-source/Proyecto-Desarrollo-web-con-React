import { useState } from 'react';
import MenuBar from './components/MenuBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <MenuBar />
      
      <main className="content">
        <section id="inicio">
          <h1>STYLE & ELEGANCE</h1>
          <p>Descubre la última moda y eleva tu estilo con nuestra colección exclusiva. Diseño, calidad y tendencia se combinan para crear looks únicos que reflejen tu personalidad.</p>
        </section>

        <section id="contenido">
          <h2>Nuestras Colecciones</h2>
          <p>Explora nuestras líneas de moda cuidadosamente seleccionadas. Desde casual elegante hasta sofisticado nocturno, tenemos el outfit perfecto para cada momento de tu vida.</p>
        </section>

        <section id="servicios">
          <h2>Servicios Premium</h2>
          <p>Asesoramiento de imagen personalizado, atención al cliente de lujo y garantía de calidad en cada prenda. Nos comprometemos a brindarte una experiencia de compra excepcional.</p>
        </section>

        <section id="contacto">
          <h2>Contáctanos</h2>
          <p>📞 +591 77455171 | ✉️ ajayustyle@gmail.com | 📍 Ajayu Style - Cbba/Bolivia</p>
        </section>

        <section id="acerca">
          <h2>Acerca de Nosotros</h2>
          <p>Con más de 10 años en la industria de la moda, somos pioneros en tendencias y calidad. Nuestro compromiso es hacer que cada persona se sienta única y especial a través de la moda.</p>
        </section>
      </main>
    </div>
  );
}

export default App;