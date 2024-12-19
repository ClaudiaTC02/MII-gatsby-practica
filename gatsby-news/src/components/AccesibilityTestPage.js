import React from 'react';

const AccessibilityTestPage = () => (
  <main>
    <h1>Prueba de accesibilidad</h1>
    {/* Error: Imagen sin alternativa textual */}
    <img src="../images/news.jpg" />

    {/* Error: Duplicidad de roles ARIA */}
    <button role="button">Este es un banner.</button>
    <section role="banner">Otro banner duplicado.</section>
  </main>
);

export default AccessibilityTestPage;
