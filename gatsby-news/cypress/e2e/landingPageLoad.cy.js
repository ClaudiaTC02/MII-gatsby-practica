describe('Página de inicio', () => {
    beforeEach(() => {
      cy.visit('http://localhost:8000/');
    });
  
    it('debe cargar correctamente', () => {
      // Título presente
      cy.get('h1').contains('¡Lo último en noticias!');
      
      // Imágenes cargadas
      cy.get('img[alt="Imagen de notiicas en la landing"]').should('be.visible');
      
      // Enlaces de navegación
      cy.get('nav').should('contain', 'Inicio');
      cy.get('nav').should('contain', 'Tecnología');
      cy.get('nav').should('contain', 'Deportes');
      cy.get('nav').should('contain', 'Salud');
    });
  
    it('debe mostrar las categorías de noticias', () => {
      // Categorías
      cy.get('.index-module--cardsContainer--7083f').should('be.visible');
      cy.get('.index-module--card--5f6ab').should('have.length', 3); // Espera que haya 3 categorías
    });
  });
  