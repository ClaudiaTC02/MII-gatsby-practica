describe('Página de noticias', () => {
    beforeEach(() => {
      cy.visit('http://localhost:8000/tech');
    });
  
    it('debe cargar correctamente las noticias', () => {
      cy.get('h1').contains('Noticias sobre tecnología');
  
      // Artículos
      cy.get('.card-module--newsGrid--2e8a7').should('be.visible');
      cy.get('.card-module--card--63c6d').should('have.length.greaterThan', 0); // Al menos uno
  
      // Enlace Leer Más presente en cada capítulo
      cy.get('.card-module--card--63c6d .card-module--readMore--cd884').each(($el) => {
        cy.wrap($el).should('have.attr', 'href');
      });
    });
  
    it('debe permitir interactuar con el botón de calificación', () => {
      // Botones de puntuar
      cy.get('.card-module--ratingContainer--d6601').should('be.visible');
      cy.get('.card-module--ratingContainer--d6601 button').should('have.length.greaterThan', 0);
  
      // Simula un clic en el botón de calificación
      cy.get('.card-module--ratingContainer--d6601 button').first().click();
      cy.wait(500);
      cy.contains('Valoraciones para').should('be.visible');
    });
  });
  